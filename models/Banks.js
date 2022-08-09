import mongoose from "mongoose";

const schema = new mongoose.Schema({
    morning: {
        type: Number,
        required: true,
        default: 0,
    },
    afternoon: {
        type: Number,
        required: true,
        default: 0,
    },
    night : {
        type: Number,
        require: true,
        default: 0,
    },
    proceeds : {
        type: Number,
        require: true,
        default: 0,
    },
    status: {
        type: Boolean,
        require: true,
        default: false,
    }    
  },
  { timestamps: true, }
);

export const BankModel = mongoose.model('Bank', schema);