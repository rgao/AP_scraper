const db = require("../models");

module.exports = {
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
        db.Article
        .create(request.body)
        .then(dbArticle => response.json(dbArticle))
        .catch(error => response.status(422).json(error));
    },

    update: (request, response) => {
        db.Article
        .findById({ _id: request.params.id })
        .update({ commentary: request.body })
        .then(dbArticle => response.json(dbArticle))
        .catch(error => response.status(422).json(error));
    },

    remove: (request, response) => {
        db.Article
        .findById({ _id: request.params.id })
        .then(dbArticle => dbArticle.remove())
        .then(dbArticle => response.json(dbArticle))
        .catch(error => response.status(422).json(error));
    }
};