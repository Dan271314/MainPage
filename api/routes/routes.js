import express from 'express';
import path from "path";
import PageController from "../Controllers/controllers.js";

const router = express.Router()

router.route("/").get
(PageController.getHomePage);

router.route("/articles").get
(PageController.getArticles);

router.route("/profile").get(PageController.getProfile);

router.route("/public/css/:style.css").get((req, res) => {
    res.sendFile(path.resolve() + `/public/css/${req.params.style}.css`);
});

export default router;


