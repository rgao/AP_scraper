const db = require("../models");

module.exports = {
    // Get all articles that match the query parameters
    findAll: (request, response) => {
        db.Article
            .find(request.query)
            .sort({ _id: -1 })
            .then(dbArticle => response.json(dbArticle))
            .catch(error => response.status(422).json(error));
    },

    findOne: (request, response) => {
        db.Article
            .findById(request.params.id)
            .then(dbArticle => response.json(dbArticle))
            .catch(error => response.status(422).json(error));
    },

    save: (request, response) => {
        // console.log(request.body);
        db.Article
            .create(request.body)
            .then(dbArticle => response.json(dbArticle))
            .catch(error => response.status(422).json(error));
    },

    // Update an article's commentary by ID
    update: async (req, res) => {
        try {
            const { id } = req.params; // Get the ID from URL parameters
            const updatedData = req.body; // Get the updated data from request body

            const article = await db.Article.findByIdAndUpdate(id, { commentary: updatedData }, { new: true }); // Mongoose method to find and update

            if (!article) {
                return res.status(404).json({ message: 'Article not found' });
            }

            res.status(200).json(article);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }   
    },

    // Delete an article by ID
    remove: async (req, res) => {
        try {
            const { id } = req.params; // Get the ID from URL parameters
            const article = await db.Article.findByIdAndDelete(id); // Mongoose method to find and delete

            if (!article) {
                return res.status(404).json({ message: 'Article not found' });
            }

            res.status(200).json({ message: 'Article successfully deleted', article });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};