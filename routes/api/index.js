const router = require("express").Router();
const bookRoutes = require("./books");


router.use("/savedbooks", bookRoutes);

module.exports = router;
