import { asyncHandler } from "./../utils/asyncHandler.js";
import { ApiError } from "./../utils/ApiError.js";
import { ApiResponse } from "./../utils/ApiResponse.js";
import { uploadOnCloudinary } from "./../utils/cloudinary.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  //get user details from frontend
  // validation -
  // check if user already exists : username , email
  // check for images check for avatar
  // upload them to cloudinary
  // create user object -- create entry in db
  // remove pass and refresh token field from response,
  // check for user creation
  //return response

  const { name, username, password, email } = req.body;

  // Check if any of the required fields are empty or contain only whitespace
  if ([name, username, password, email].some(field => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  
  // Additional validation, if needed, can be implemented here
  
  // If all fields are valid, proceed with further operations
  
  console.log(req.body)
  const extistedUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (extistedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }
  const avatarLocalPath = req.files?.avatar[0]?.path;
  // const coverImageLocalPath = req.files?.coverImage[0]?.path;
  let coverImageLocalPath;
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path;
  }

  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  // console.log(avatar);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  // console.log(coverImage);
  if (!avatar) {
    throw new ApiError(400, "Avatar is required");
  }
  const user = await User.create({
    name,
    avatar: avatar?.url,
    coverImage: coverImage?.url || "",
    username: username?.toLowerCase(),
    email,
    password,
  });
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while regestering user");
  }
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registered Successfully"));
});

export { registerUser };
