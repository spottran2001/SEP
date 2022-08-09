import mongoose from "mongoose";

const schema = new mongoose.Schema({
    account_id: {
        type: mongoose.Schema.Types.ObjectId,
		ref: 'Account',
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
        require: false,
    },
  },
  { timestamps: true, }
);

export const BillModel = mongoose.model('Bill', schema);