import express from "express";
import { getAllMessage, replyToMessage, sendMessage } from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", sendMessage);
router.get("/get-all-messages", getAllMessage);
router.post('/reply', replyToMessage);
export default router;
