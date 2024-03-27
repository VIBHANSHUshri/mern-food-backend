import { body, validationResult } from "express-validator";
import { Request , Response , NextFunction } from "express";

const handleValidationErrors = async(req : Request , res : Response , next : NextFunction) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors : errors.array()})
    }

    next();
}

export const validateMyUserRequeset  = [
    body("name").isString().notEmpty().withMessage("Name must be a String"),
    body("addressLine1").isString().notEmpty().withMessage("AddressLine1 must be a String"),
    body("city").isString().notEmpty().withMessage("city must be a String"),
    body("country").isString().notEmpty().withMessage("country must be a String"),
    handleValidationErrors,

]

export const validateMyRestaurantRequeset = [
    body("restaurantName").notEmpty().withMessage("Restaurant Name is Required"),
    body("city").notEmpty().withMessage("city Name is Required"),
    body("country").notEmpty().withMessage("Country Name is Required"),
    body("deliveryPrice").isFloat({min : 0}).withMessage("Delivery price must be a positive Number"),
    body("estimatedDeliveryTime").isInt({min:0}).withMessage("Estimated Delivery Time must be a positive Integer"),
    body("cuisines").isArray().withMessage("cuisines must be an array ").not().isEmpty().withMessage("Cusines Cannot be empty"),
    body("menuItems").isArray().withMessage("Menu Items must be an array "),
    body("menuItems.*.name").notEmpty().withMessage("Menu Items name is required "),
    body("menuItems.*.price").isFloat({min : 0}).withMessage("Menu Items price is required and it should be positive"),
     handleValidationErrors,    
];