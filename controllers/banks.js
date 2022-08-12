import { BankModel } from "../models/BankModel.js";

export const getBanks = async (req, res) => {
    try {
        const banks = await BankModel.find();

        res.status(200).json(banks);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createBank = async (req, res) => {
    try {
        const data = req.body;
        const account_id = {account_id: req.accountId};

        const newBank = Object.assign(account_id, data);

        const bank = new BankModel(newBank);
        await bank.save();
    
        console.log(bank)
        res.status(200).json(bank);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateBank = async (req, res) => {
    try {
        const updateBank = req.body;

        BankModel.findByIdAndUpdate(req.params.id, updateBank, {new: true})
        .then((bank) => res.json({status: "ok" ,bank}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteBank = async (req, res) => {
    try {
        BankModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("Bank deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showBank = async (req, res) => {
    try {

        BankModel.findById(req.params.id)
        .then((bank) => res.json(bank))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateMorningBank = async (req, res) => {
    try {
        const morningBank = req.body.morning;

        BankModel.findByIdAndUpdate(req.params.id, morningBank, {new: true})
        .then((bank) => res.json({status: "ok" ,bank}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateAfternoonBank = async (req, res) => {
    try {
        const afternoonBank = req.body.afternoon;

        BankModel.findByIdAndUpdate(req.params.id, afternoonBank, {new: true})
        .then((bank) => res.json({status: "ok" ,bank}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateNightBank = async (req, res) => {
    try {
        const nightBank = req.body.night;

        BankModel.findByIdAndUpdate(req.params.id, nightBank, {new: true})
        .then((bank) => res.json({status: "ok" ,bank}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const closeBank = async (req, res) => {
    try {
        const bank = await BankModel.findById(req.params.id)
        const closeBank = {
            process: bank.night-bank.morning,
            status: true
        }

        BankModel.findByIdAndUpdate(req.params.id, closeBank, {new: true})
        .then((bank) => res.json({status: "ok" ,bank}));

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

