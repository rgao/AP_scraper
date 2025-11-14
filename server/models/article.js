const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Article schema
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

    date: {
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
