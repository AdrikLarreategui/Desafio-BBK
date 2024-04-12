const express = require("express");
const router = express.Router();
const OfferController = require("../controllers/OfferController");
const {
  authentication,
  isAuthorOffer,
} = require("../middlewares/authentication");

// create post with authentication
router.post("/", authentication, OfferController.create);
//update post with authentication
router.put("/id/:_id", authentication, OfferController.update);
// delete with authentication
router.delete(
  "/id/:_id",
  authentication,
  isAuthorOffer,
  OfferController.delete
);
// get all posts with users and comments (develope the comment first) + search by title and id (queries)
router.get("/getAll", OfferController.getAll);

// Like a post with authentication
router.put("/like/:_id", authentication, OfferController.like);
// Unlike a post with authentication
router.delete("/unlike/:_id", authentication, OfferController.unlike);

module.exports = router;
