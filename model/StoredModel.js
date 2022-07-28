import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        require: true,
    },
    price: {
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

export const StoredModel = mongoose.model('Stored', schema);