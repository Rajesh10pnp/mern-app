import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  getCategoryController,
  createCategoryController,
  updateCategoryController,
  singleCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// updatecategory

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all category

router.get("/get-category", getCategoryController);
router.get("/single-category/:slug", singleCategoryController);
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
