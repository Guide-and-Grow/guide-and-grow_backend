import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter your name."],
      unique: true,
    },

    email: {
      type: String,
      unique: true,
      required: [true, "Please enter your email."],
    },

    mobile: {
      type: Number,
      unique: true,
      required: [true, "Please enter your mobile number."],
    },

    bio: {
      type: String,
      required: [true, "Please enter your bio."],
    },

    avatar: {
      type: String,
    },

    password: {
      type: String,
      required: [true, "Please enter the strong password."],
    },

    socialMedia: {
      facebook: {
        type: String,
        unique: true,
      },

      twitter: {
        type: String,
        unique: true,
      },

      instagram: {
        type: String,
        unique: true,
      },

      youtube: {
        type: String,
        unique: true,
      },

      linkedin: {
        type: String,
        unique: true,
      },

      github: {
        type: String,
        unique: true,
      },
    },
  },

  { timestamps: true }
);
const User = model("User", UserSchema);
export default User;
