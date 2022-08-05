import { BillModel } from "../model/BillModel.js";

export const getBills = async (req, res) => {
    try {
        const bills = await BillModel.find();

        res.status(200).json(bills);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createBill = async (req, res) => {
    try {
        const newBill = req.body;

        const bill = new BillModel(newBill);
        await bill.save();
    
        console.log(bill)
        res.status(200).json(bill);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateBill = async (req, res) => {
    try {
        const updateBill = req.body;

        BillModel.findByIdAndUpdate(req.params.id, updateBill, {new: true})
        .then((bill) => res.json({status: "ok" ,bill}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteBill = async (req, res) => {
    try {
        BillModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("bill deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showBill = async (req, res) => {
    try {
        BillModel.findById(req.params.id)
        .then((bill) => res.json(bill))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};


