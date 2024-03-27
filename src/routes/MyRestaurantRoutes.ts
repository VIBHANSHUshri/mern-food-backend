import express from "express"
import multer from "multer";
import MyRestaurantController from "../controllers/MyRestaurantController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequeset } from "../middleware/validation";
const router  = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage : storage,
    limits : {
        fileSize : 5 * 1024 * 1025, //5mb;
    },
}); 

router.get("/" , jwtCheck , jwtParse , MyRestaurantController.getMyRestaurant)

router.post('/' , upload.single("imageFile") , validateMyRestaurantRequeset, jwtCheck , jwtParse  , MyRestaurantController.createMyRestaurant);
router.put('/' , upload.single("imageFile") , validateMyRestaurantRequeset, jwtCheck , jwtParse  , MyRestaurantController.updateMyRestaurant )
export default router;