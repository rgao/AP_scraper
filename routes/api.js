const router = require("express").Router();
const articleController = require("../controllers/articleController");
const searchController = require("../controllers/searchController");

router.route("/article")
    .get(articleController.findAll)
    .post(articleController.save)

router.route("/article/:id")
    .get(articleController.findOne)
    .put(articleController.update)
    .delete(articleController.remove);

router.route("/search/?")
    .get(searchController);

module.exports = router;

