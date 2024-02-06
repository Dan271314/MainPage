import express from 'express';
import path from "path";
import PageController from "../Controllers/controllers.js";

const router = express.Router()

router.route("/").get
(PageController.getHomePage);

router.route("/articles").get
(PageController.getArticles);

router.route*("/profile").get(PageController.getProfile);

export default router;


