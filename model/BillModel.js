import mongoose from "mongoose";

const schema = new mongoose.Schema({
    account_id: {
        type: String,
        required: true,
    },
    price_total: {
        type: Number,
        require: true,
    },
    details: {
        type: Array,
        require: true,
    },
    payment_type:{
        type: String,
        require: true,
    },
  },
  { timestamps: true, }
);

export const BillModel = mongoose.model('Bill', schema);