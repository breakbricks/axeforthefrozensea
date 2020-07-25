const router = require("express").Router();
const axesController = require("../../controllers/axesController");

// Matches with "/api/axes"
router.route("/")
    .get(axesController.findAll)
    .post(axesController.create);

// Matches with "/api/axes/:id"
router
    .route("/:id")
    .get(axesController.findById)
    .put(axesController.update)
    .delete(axesController.remove);

module.exports = router;
