import mongoose from "mongoose";

const schema = new mongoose.Schema({
    bonus: {
        type: Number,
        default: null,
    },
    punish: {
        type: Number,
        required: true,
    },
    systemWorkTime: {
        type: Number,
        required: true,
        default: 0,
    },
    totalSalary: {
        type: Number,
        require: true,
    },
    payRate: {
        type: Number,
        require: true,
    },
    note: {
        type: String,
        require: true,
        default: null,
    },
    month: {
        type: Number,
        require: true,
    },
    year: {
        type: Number,
        require: true,
    },
    account_id: {
        type: String,
        require: true,
    },
    paymentStatus: {
        type: Boolean,
        require: true,
        default: false,
    },
  },
  { timestamps: true, }
);

export const WorkTimeModel = mongoose.model('WorkTime', schema);