import { StoredModel } from "../model/StoredModel.js";

export const getStoreds = async (req, res) => {
    try {
        const storeds = await StoredModel.find();

        res.status(200).json(storeds);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createStored = async (req, res) => {
    try {
        const newStored = req.body;

        const stored = new StoredModel(newStored);
        await stored.save();
    
        console.log(stored)
        res.status(200).json(stored);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateStored = async (req, res) => {
    try {
        const updateStored = req.body;

        StoredModel.findByIdAndUpdate(req.params.id, updateStored, {new: true})
        .then((stored) => res.json({status: "ok" ,stored}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteStored = async (req, res) => {
    try {
        StoredModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("Stored deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showStored = async (req, res) => {
    try {
        StoredModel.findById(req.params.id)
        .then((stored) => res.json(stored))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};


