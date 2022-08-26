import { Router } from "express";
import joiValidation from "../middlewares/joiValidation.js";
import loginSchema from "../schemas/loginSchema.js";
import {login} from "../controllers/authController.js";

const authRouter = Router();
authRouter.post("/login",joiValidation(loginSchema),login);

export default authRouter;

