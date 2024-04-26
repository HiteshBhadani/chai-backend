import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { Upload } from "..u/middlewares/multer.middlewares.js";

const router = Router()

router.route("/register").post(
    uplaod.fields([
        {
            name: "avatar",
            maxcount: 1
        },
        {
            name: "coverimage",
            maxCount: 1
            
        }

    ]),
    
    registerUser
)


export default router