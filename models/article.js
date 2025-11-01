const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: false
    },

    url: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false,
    },

    image: {
        type: String,
        required: false
    },

    author: {
        type: String,
        required: false
    },

    commentary: {
        type: Array,
        required: false
    }
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
