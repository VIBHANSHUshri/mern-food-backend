import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();
//api/restaurant/tikamgarh
router.get("/:restaurantId" ,param("restaurantId").isString().trim().notEmpty().withMessage(" Restaurant Id parameter must be a valid string"),
RestaurantController.getRestaurant
)
router.get('/search/:city' , param("city").isString().trim().notEmpty().withMessage(" City parameter must be a valid string"),
  
RestaurantController.searchRestaurant

);    
export default router