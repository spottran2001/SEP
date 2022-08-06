import { AccountModel } from "../model/AccountModel.js";

export const getAccounts = async (req, res) => {
    try {
        const accounts = await AccountModel.find();

        res.status(200).json(accounts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createAccount = async (req, res) => {
    try {
        const newAccount = req.body;

        const account = new AccountModel(newAccount);
        await account.save();
    
        console.log(account)
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateAccount = async (req, res) => {
    try {
        const updateAccount = req.body;

        AccountModel.findByIdAndUpdate(req.params.id, updateAccount, {new: true})
        .then((account) => res.json({status: "ok" ,account}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteAccount = async (req, res) => {
    try {
        AccountModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("account deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showAccount = async (req, res) => {
    try {

        AccountModel.findById(req.params.id)
        .then((account) => res.json(account))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
export const getStaff = async (req, res) => {
    try {
        const staffs = await AccountModel.find({role: 1});

        res.status(200).json(staffs);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

