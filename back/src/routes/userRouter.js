import { Router } from "express";
import { createUser, createTransaction, getUser,  } from "../controllers/transactionController.js";
import joiValidation from "../middlewares/joiValidation.js";
import signUpSchema from "../schemas/signUpSchema.js";
import entriesSchema from "../schemas/entriesSchema.js"

const entriesRouter = Router()

entriesRouter.post("/users",joiValidation(signUpSchema), createUser)
entriesRouter.post("/users/transactions", joiValidation(entriesSchema), createTransaction)
entriesRouter.get("/users", getUser)
export default entriesRouter;