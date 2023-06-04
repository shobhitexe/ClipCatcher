import express from "express";
import { getLinkData, downloadYtVideo } from "../controllers/ytDownload.js";

const router = express.Router();

router.post("/getYoutubeData", getLinkData);
router.post("/downloadYtVideo", downloadYtVideo);

export default {
  routes: router,
};
