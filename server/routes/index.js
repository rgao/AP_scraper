// const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api.js");

router.use("/api", apiRoutes);
// For serving a single file in the client folder
// router.use((__, response) =>
//     response.sendFile(path.join(__dirname, "../../client/public/index.html")));

module.exports = router;
