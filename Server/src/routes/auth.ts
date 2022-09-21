import {  Router } from "express";
import {signUp, signIn, profile} from "../controllers/auth.controller"
const router:Router=Router();


router.post('/signup' , signUp);
router.post('/signin' , signIn);
router.get ('/profile', profile)
export default router;

