import mongoose, { Schema } from "mongoose";

const forumReplySchema = new Schema(
  {
    commentId: {
      type: String,
      required: [true, "Comment ID is required"],
    },
    content: {
      type: String,
      required: [true, "Forum reply content is required"],
      maxLength: [
        2500,
        "Forum reply content should not exceed 2500 characters long",
      ],
    },
    likes: {
      type: Number,
    },
    authorName: {
      type: String,
      required: [true, "Author name is required"],
    },
    authorId: {
      type: String,
      required: [true, "Author ID is required"],
    },
  },
  { timestamps: true }
);

const ForumReplies =
  mongoose.models.ForumReplies ||
  mongoose.model("ForumReplies", forumReplySchema);

export default ForumReplies;
