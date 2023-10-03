const router = require("express").Router();
const userRoutes = require("./userRoutes");
const petRoutes = require("./petRoutes");
const petPostRoutes = require("./petPostRoutes");

router.use("/users", userRoutes);
router.use("/pets", petRoutes);
router.use("/pet-post", petPostRoutes);

module.exports = router;
