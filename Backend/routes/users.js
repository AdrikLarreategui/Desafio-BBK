const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication, isAdmin } = require("../middlewares/authentication");

router.post("/", UserController.create);
router.post("/login", UserController.login);
// router.get("/id/:_id", authentication, isAdmin, UserController.getUserByID);
// router.get("/connected", authentication, UserController.getUserConnected);
router.delete("/logout", authentication, UserController.logout);
// router.get("/getAll", authentication, isAdmin, UserController.getAll);
router.delete("/delete/:_id", authentication, isAdmin, UserController.delete);

module.exports = router;
