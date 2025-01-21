import { Router } from "express";
import { sendNotification } from "../controller/notification.controller.js";

const router = Router();

router.post("/send", sendNotification);

export default router;

