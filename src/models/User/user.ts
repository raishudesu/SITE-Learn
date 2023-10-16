import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minLength: [3, "Name must be larger than 3 characters"],
      maxLength: [50, "Name must be lesser than 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [
        /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        "Invalid email",
      ],
    },
    isAdmin: {
      type: Boolean,
      required: [true, "isAdmin property is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [6, "Password must be larger than 6 characters"],
    },
  },
  { timestamps: true }
);

const Users = mongoose.models.Users || mongoose.model("Users", userSchema);

export default Users;
