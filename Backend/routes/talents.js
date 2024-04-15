const express = require("express");
const router = express.Router();
const TalentController = require("../controllers/TalentController");
const { authentication, isAdmin } = require("../middlewares/authentication");

router.post("/", TalentController.create);
router.post("/login", TalentController.login);
// router.get("/id/:_id", authentication, isAdmin, TalentController.getUserByID);
// router.get("/connected", authentication, TalentController.getUserConnected);
router.delete("/logout", authentication, TalentController.logout);
router.get("/getAll", authentication, TalentController.getAll);
router.delete("/delete/:_id", authentication, isAdmin, TalentController.delete);
router.put("/update/:_id", authentication, TalentController.update);

module.exports = router;
