import User from "../model/User.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
dotenv.config();

const postApiSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);

    const signupObj = new User({
      name,
      email,
      password: hashedPassword,
    });

    // console.log(signupObj);

    const savedUser = await signupObj.save();

    console.log("Saved User", savedUser);

    res.json({
      success: true,
      data: savedUser,
      message: "User saved successfully...",
    });
  } catch (err) {
    res.json({
      success: false,
      message: err.message,
    });
  }
};

// const postApiLogin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     if (!email || !password) {
//       return res.json({
//         success: false,
//         message: "Please enter a valid email and password...!",
//       });
//     }

//     const findUser = await User.findOne({ email, password }).select(
//       "name email mobile"
//     );
//     if (!findUser) {
//       return res.json({
//         success: false,
//         message: "Invalid Crediantial",
//       });
//     }

//     // Create a JWT token
//     const token = jwt.sign(
//       { userId: findUser._id },
//       process.env.JWT_SECRET_KEY,
//       {
//         expiresIn: "1h",
//       }
//     );

//     res.json({
//       success: true,
//       token,
//       data: findUser,
//       message: "User login successful...",
//     });
//   } catch (err) {
//     res.json({
//       success: false,
//       message: err.message,
//     });
//   }
// }

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
      message: "User Found",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { postApiSignup, postApiLogin };
