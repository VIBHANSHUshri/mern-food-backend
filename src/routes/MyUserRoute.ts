import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequeset } from "../middleware/validation";
const router  = express.Router();

//api/my/user
router.get("/" , jwtCheck,jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put("/" , jwtCheck,jwtParse, validateMyUserRequeset, MyUserController.updateCurrentUser)

export default router