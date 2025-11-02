const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    image: {
        type: String,
        required: false
    },

    author: {
        type: String,
        required: true
    },

    commentary: {
        type: Array,
        required: false
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
