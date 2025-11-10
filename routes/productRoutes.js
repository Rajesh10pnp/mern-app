import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, getProductController } from "../controllers/ProductController.js";
import formidable from "express-formidable";

const router =  express.Router();

//Route

router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);

router.get("/get-product", getProductController);
export default router;