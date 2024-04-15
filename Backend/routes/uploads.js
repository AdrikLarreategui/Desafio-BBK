const express = require("express");
const router = express.Router();
const UploadController = require("../controllers/UploadController");
const upload = require("../middlewares/uploadMiddleware");
const { authentication } = require("../middlewares/authentication");

router.put(
  "/image",
  authentication,
  upload.single("picture"),
  UploadController.uploadImage
);

module.exports = router;
