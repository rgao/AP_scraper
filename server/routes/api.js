const router = require("express").Router();
const articleController = require("../controllers/articleController.js");
const searchController = require("../controllers/searchController.js");

router.route("/articles")
    .get(articleController.findAll)
    .post(articleController.save)

router.route("/article/:id")
    .get(articleController.findOne)
    .put(articleController.update)
    .delete(articleController.remove);

router.route("/search/")
    .get(searchController);

module.exports = router;
