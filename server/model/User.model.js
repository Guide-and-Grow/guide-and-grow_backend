import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      required: true,
    },

    mobile: {
      type: Number,
      required: true,
      unique: true,
      required: true,
    },

    bio: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
    },

    password: {
      type: String,
      required: true,
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
