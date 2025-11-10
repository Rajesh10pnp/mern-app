import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;

    if (!name) {
      return res.send(message, "Name is Required");
    }
    if (!email) {
      return res.send(message, "Email is Required");
    }
    if (!password) {
      return res.send(message, "Password is Required");
    }
    if (!phone) {
      return res.send(message, "Phone Number is Required");
    }
    if (!address) {
      return res.send(message, "Address is Required");
    }
    if (!answer) {
      return res.send(message, "Answer is Required");
    }

    const exitingUser = await userModel.findOne({ email });
    if (exitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registraion please login",
      });
    }
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (message) {
    console.log(message);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      message,
    });
  }
};

// POST login

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).send({
        success: true,
        message: "Invalid emial and password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });

    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (message) {
    console.log(message);
    res.status(500).send({
      success: true,
      message: "Error in Login",
      message,
    });
  }
};
// forgetPasswordController

export const forgetPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    console.log("Forget Password Request:", req.body);

    if (!email) return res.status(400).send({ message: "Email is required" });
    if (!answer) return res.status(400).send({ message: "Answer is required" });
    if (!newPassword)
      return res.status(400).send({ message: "New password is required" });

    // check user
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Invalid Email or Answer",
      });
    }

    // hash new password
    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { password: hashed });

    console.log("User found:", user.email);
    res.status(200).send({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log("Forget Password Error:", error);
    res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
};

export const textController = (req, res) => {
  try {
    res.send("Protected Route");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
