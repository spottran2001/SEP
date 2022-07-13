import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    account_status: {
        type: Number,
        required: true,
    },
    role: {
        type: Number,
        required: true,
    },
    full_name: {
        type: String,
        required: true,
    },
    id_card: {
        type: String,
        required: true,
    },
    date_of_birth: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
  },
  { timestamps: true, }
);

export const AccountModel = mongoose.model('Account', schema);