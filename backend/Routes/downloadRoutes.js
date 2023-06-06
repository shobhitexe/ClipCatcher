import express from "express";
import { getLinkData, downloadYtVideo } from "../controllers/ytDownload.js";
import { getInstaData } from "../controllers/instaDownload.js";

const router = express.Router();

router.get("/getYoutubeData", getLinkData);
router.post("/downloadYtVideo", downloadYtVideo);

router.get("/getInstaData", getInstaData);

export default {
  routes: router,
};
