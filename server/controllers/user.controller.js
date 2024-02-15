import User from "../model/User.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();

const postApiSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(422).json({
        success: false,
        message: "Name, email, and password are required.",
      });
    }

    // Check if email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message:
          "Email is already in use. Please use a different email address.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const signupObj = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await signupObj.save();

    res.status(201).json({
      success: true,
      data: savedUser,
      message: "Signup successfully...",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const postApiLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET_KEY);

    return res.status(200).json({
      success: true,
      id: user._id,
      token: token,
      message: "Login successfully...",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { postApiSignup, postApiLogin };
