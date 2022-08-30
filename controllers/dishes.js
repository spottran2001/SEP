import { DishModel } from "../models/DishModel.js";

export const getDishes = async (req, res) => {
    try {
        const dishes = await DishModel.find().sort({name: 1});

        res.status(200).json(dishes);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createDish = async (req, res) => {
    try {
        const newDish = req.body;

        const dish = new DishModel(newDish);
        await dish.save();
    
        res.status(200).json(dish);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateDish = async (req, res) => {
    try {
        const updateDish = req.body;

        DishModel.findByIdAndUpdate(req.params.id, updateDish, {new: true})
        .then((dish) => res.json({status: "ok" ,dish}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteDish = async (req, res) => {
    try {
        DishModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("dish deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showDish = async (req, res) => {
    try {
        DishModel.findById(req.params.id)
        .then((dish) => res.json(dish))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};