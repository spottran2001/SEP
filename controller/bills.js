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
        const data = req.body;
        const account_id = {account_id: req.accountId};

        const newBill = Object.assign(account_id, data);

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
export const _3MonthDelete = async (req, res) => {
    try {
        var datetime = new Date();
        datetime.setMonth(datetime.getMonth() + -3);
        datetime.setDate(1);
        console.log(datetime)


        BillModel.deleteMany({
            createdAt: {
                $lt: ISODate(datetime)
            }
        })
        res.json({ success: true, message: 'Happy learning!', current_month: current_month })
        // BillModel.findByIdAndDelete(req.params.id)
        // .then(() => res.json("bill deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

