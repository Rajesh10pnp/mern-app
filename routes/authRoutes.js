import express from "express";
import {registerController, loginController, textController, forgetPasswordController} from "../controllers/authController.js";
import {requireSignIn, isAdmin} from "../middlewares/authMiddleware.js";


const router = express.Router();

router.post('/register', registerController);

//login || post

router.post('/login', loginController);

router.get('/test', requireSignIn, isAdmin, textController);

// forget password || post

router.post("/forget-password", forgetPasswordController);

// Protected route user

router.get("/user-auth", requireSignIn, (req, res)=>{
    res.status(200).send({ok: true});
});
// Protected route admin

router.get("/admin-auth", requireSignIn, isAdmin, (req, res)=>{
    res.status(200).send({ok: true});
});

export default router;