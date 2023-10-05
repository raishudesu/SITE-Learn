import mongoose, { Schema, mongo } from "mongoose";

const notificationSchema = new Schema(
  {
    userId: {
      type: String,
      required: [true, "User ID is required"],
    },
    content: {
      type: String,
      required: [true, "Notification Content is required"],
    },
  },
  { timestamps: true }
);

const Notification =
  mongoose.models.Notifcation ||
  mongoose.model("Notification", notificationSchema);

export default Notification;
