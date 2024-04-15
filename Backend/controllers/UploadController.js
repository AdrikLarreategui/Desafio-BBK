const Offer = require("../models/Offer");
const Company = require("../models/Company");
const Talent = require("../models/Talent");

const UploadController = {
  async uploadImage(req, res, next) {
    try {
      if (!req.file || !req.file.path) {
        throw new Error("No file uploaded");
      }

      let user;
      if (req.user.role === "talent") {
        user = await Talent.findById(req.user._id).exec();
      } else if (req.user.role === "company") {
        user = await Company.findById(req.user._id).exec();
      }

      if (user.role === "talent") {
        await Talent.findByIdAndUpdate(
          req.user._id,
          { profileImg: req.file.path },
          { new: true }
        );
        res.status(200).send({
          message: "You have added talent's profile image ",
          file: req.file,
        });
      } else if (user.role === "company") {
        await Company.findByIdAndUpdate(
          req.user._id,
          { profileImg: req.file.path },
          { new: true }
        );
        res.status(200).send({
          message: "You have added company's profile image ",
          file: req.file,
        });
      }
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
};

module.exports = UploadController;
