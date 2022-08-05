import { CategoryTypeModel } from "../model/CategoryTypeModel.js";

export const getCategoryTypes = async (req, res) => {
    try {
        const category_types = await CategoryTypeModel.find();

        res.status(200).json(category_types);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const createCategoryType = async (req, res) => {
    try {
        const newCategoryType = req.body;

        const category_type = new CategoryTypeModel(newCategoryType);
        await category_type.save();
    
        console.log(category_type)
        res.status(200).json(category_type);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const updateCategoryType = async (req, res) => {
    try {
        const updateCategoryType = req.body;

        CategoryTypeModel.findByIdAndUpdate(req.params.id, updateCategoryType, {new: true})
        .then((category_type) => res.json({status: "ok" ,category_type}));
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const deleteCategoryType = async (req, res) => {
    try {
        CategoryTypeModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("CategoryType  deleted"))
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const showCategoryType = async (req, res) => {
    try {
        CategoryTypeModel.findById(req.params.id)
        .then((category_type) => res.json(category_type))        
    } catch (error) {
        res.status(500).json({ error: error });
    }
};


