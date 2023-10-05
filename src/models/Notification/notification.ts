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

const Notifications =
  mongoose.models.Notifcations ||
  mongoose.model("Notifications", notificationSchema);

export default Notifications;
