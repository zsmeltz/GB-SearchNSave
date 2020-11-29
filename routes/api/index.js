const router = require("express").Router();
const bookRoutes = require("./books");

// Book routes
router.use("/savedBooks", bookRoutes);

module.exports = router;
