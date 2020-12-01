const router = require("express").Router();
const gbooksController = require("../../controllers/gbooksController");

// Matches with "/api/books"
router.route("/")
  .get(gbooksController.findAll)
  .post(gbooksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(gbooksController.remove);

module.exports = router;
