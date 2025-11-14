const router = require("express").Router();
const articleController = require("../controllers/articleController.js");
const searchController = require("../controllers/searchController.js");

// /api/articles: GET to retrieve all articles, POST to create a new article
router.route("/articles")
    .get(articleController.findAll)
    .post(articleController.save)

// /api/article/:id: GET to retrieve a single article by ID, PUT to update, DELETE to remove
router.route("/article/:id")
    .get(articleController.findOne)
    .put(articleController.update)
    .delete(articleController.remove);

// /api/search: GET to search articles based on query parameters
router.route("/search/")
    .get(searchController);

module.exports = router;
