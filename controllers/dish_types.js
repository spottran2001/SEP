import { DishTypeModel } from "../models/DishTypeModel.js";

export const getDishTypes = async (req, res) => {
    try {
        const dish_types = await DishTypeModel.find();

        res.status(200).json(dish_types);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createDishType = async (req, res) => {
    try {
        const newDishType = req.body;

        const dish_type = new DishTypeModel(newDishType);
        await dish_type.save();
    
        console.log(dish_type)
        res.status(200).json(dish_type);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateDishType = async (req, res) => {
    try {
        const updateDishType = req.body;

        DishTypeModel.findByIdAndUpdate(req.params.id, updateDishType, {new: true})
        .then((dish_type) => res.json({status: "ok" ,dish_type}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteDishType = async (req, res) => {
    try {
        DishTypeModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("dish type deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showDishType = async (req, res) => {
    try {
        DishTypeModel.findById(req.params.id)
        .then((dish_type) => res.json(dish_type))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};