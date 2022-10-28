import express from "express"
import { signup  ,login ,update, apidelete} from "../controllers/text.controller.js";
import { authen } from "../middlewares/text.middleware.js";
const router = express.Router();
router.route("/text/create-file").post(signup)
router.route("/text/king").get(login)
router.route("/text/update").put(authen,update)
router.route("/text/apidelete").delete(authen,apidelete)
export default router;
