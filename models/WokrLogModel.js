import mongoose from "mongoose";

const schema = new mongoose.Schema({
    logout_time: {
        type: Date,
        default: null,
    },
    work_log_days: {
        type: String,
        required: true,
    },
    working_time: {
        type: Number,
        required: true,
        default: 0,
    },
    account_id: {
        type: String,
        require: true,
    },
  },
  { timestamps: true, }
);

export const WorkLogModel = mongoose.model('WorkLog', schema);