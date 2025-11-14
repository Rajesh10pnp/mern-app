import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, getProductController, productPhotoController, 
getSingleProductController, deleteProductController, updateProductController } 
from "../controllers/productController.js";
import formidable from "express-formidable";

const router =  express.Router();

//Route

router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController);
router.put("/update-product/:pid", requireSignIn, isAdmin, formidable(), updateProductController);

router.get("/get-product", getProductController);
router.get("/get-product/:slug", getSingleProductController);
router.get("/product-photo/:pid", productPhotoController);
router.delete("/product-photo/:pid", deleteProductController);
export default router;