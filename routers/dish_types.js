import express from "express";
import { getDishTypes, createDishType, updateDishType, deleteDishType, showDishType } from "../controllers/dish_types.js";
import bodyParser  from "body-parser";

const router = express.Router();


var jsonParser = bodyParser.json()
// ./DishTypes

router.get('/', getDishTypes);

router.post('/', jsonParser, createDishType);

router.put('/:id', updateDishType);

router.delete('/:id', deleteDishType);

router.get('/:id', showDishType);

export default router;