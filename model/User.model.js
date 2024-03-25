import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"
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
    },

    bio: {
      type: String,
    },

    avatar: {
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
 return await bcrypt.compare(password, this.password)
};
const User = model("User", UserSchema);
export default User;
