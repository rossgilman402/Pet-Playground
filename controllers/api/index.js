const router = require("express").Router();
const userRoutes = require("./userRoutes");
const petRoutes = require("./petRoutes");
const petPostRoutes = require("./petPostRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/pets", petRoutes);
router.use("/pet-post", petPostRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
