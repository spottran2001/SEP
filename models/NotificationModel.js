import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
      type: String,
      required: true,
  },
  },
  { timestamps: true, }
);

export const NotificationModel = mongoose.model('Notification', schema);