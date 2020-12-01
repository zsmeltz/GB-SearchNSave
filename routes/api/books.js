const router = require("express").Router();
const gbooksController = require("../../controllers/gbooksController");

router.route("/")
  .get(gbooksController.findAll)
  .post(gbooksController.create);

router
  .route("/:id")
  .delete(gbooksController.remove);

module.exports = router;
