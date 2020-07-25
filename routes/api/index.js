const router = require("express").Router();
const axeRoutes = require("./axes");

// Axe routes
router.use("/axes", axeRoutes);

module.exports = router;
