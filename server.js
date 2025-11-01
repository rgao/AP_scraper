const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/aparticles")
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

const routes = require("./routes/index.js");
app.use(routes);

app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}!`);
});
