import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name."],
      trim: true,
      index: true,
    },

    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    email: {
      type: String,
      required: [true, "Please enter your email."],
      unique: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: Number,
      unique: true,
      sparse: true,
    },

    bio: {
      type: String,
    },

    avatar: {
      type: String, // cloudinary url
    },
    coverImage: {
      type: String, // cloudinary url
    },

    password: {
      type: String,
      required: [true, "Please enter the strong password."],
    },
    refreshToken: {
      type: String,
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
    MyVideo: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  },

  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.genrateAccessToken = function () {
  console.log("genrateAccessToken");
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      name: this.name,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
UserSchema.methods.genrateRefreshToken = function () {
  console.log("genrateRefreshToken-----userid", this.id);

  return jwt.sign(
    {
      _id: this.id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = model("User", UserSchema);
