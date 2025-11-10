require('dotenv').config();
if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: './.env.production' });
};

const express = require("express");
const app = express();
console.log("Environment:", process.env.NODE_ENV, process.env.PORT);

// Middlewares
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, // Allow sending cookies/authentication headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require("mongoose");
mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/aparticles")
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

// Routing
app.get("/", (_, res) => {
  return res.status(200).json({
    status: "success",
  });
});

// Serve static assets
const path = require("path");
if (process.env.NODE_ENV === "production") {
  app.use(express.static("../../client/build"));
} else {
  app.use(express.static(path.join(__dirname, '../../client/public')));
};

const routes = require("./routes/index.js");
app.use(routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
