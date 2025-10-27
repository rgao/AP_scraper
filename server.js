const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/aparticles", 
{ useNewUrlParser: true, useUnifiedTopology: true }, function (error) {
    if (error) {
        return console.log('failed to connect to database');
    }
});

const routes = require("./routes/index.js");
app.use(routes);

app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}!`);
});
