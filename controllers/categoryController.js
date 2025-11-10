import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    console.log("Request Body:", req.body);

    if (!name || name.trim() === "") {
      return res.status(400).send({
        success: false,
        message: "Valid category name is required",
      });
    }

    const slug = slugify(name, { lower: true, strict: true });

    const existingCategory = await categoryModel.findOne({
      $or: [{ name }, { slug }],
    });

    if (existingCategory) {
      return res.status(409).send({
        success: false,
        message: "Category already exists",
      });
    }

    const category = await new categoryModel({
      name: name.trim(),
      slug: slug,
    }).save();

    res.status(201).send({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.error("Category Creation Error:", error);
    res.status(500).send({
      success: false,
      message: "Internal server error while creating category",
      error: error.message,
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Category Successfully Updated",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Category",
    });
  }
};

// get all category

export const getCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: " All gategory List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all Category",
    });
  }
};

// single category controller

export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });

    res.status(200).send({
      success: true,
      message: "Get Single gategory successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single Category",
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCategory = await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: " Category Delete Successfully",
      deletedCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single Category",
    });
  }
};
