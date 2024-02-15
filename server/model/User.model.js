import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name."],
    },

    username: {
      type: String,
      unique: true,
    },

    email: {
      type: String,
      required: [true, "Please enter your email."],
    },

    mobile: {
      type: Number,
      unique: true,
    },

    bio: {
      type: String,
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
      },

      twitter: {
        type: String,
      },

      instagram: {
        type: String,
      },

      youtube: {
        type: String,
      },

      linkedin: {
        type: String,
      },

      github: {
        type: String,
      },
    },
  },

  { timestamps: true }
);
const User = model("User", UserSchema);
export default User;
