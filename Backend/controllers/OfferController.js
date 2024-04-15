const Offer = require("../models/Offer");
// const User = require("../models/User");
const Company = require("../models/Company");
const Talent = require("../models/Talent");

const OfferController = {
  async create(req, res, next) {
    try {
      const company = await Company.findById(req.user._id);
      if (!company) {
        return res.status(404).send({ message: "Company not found" });
      }
      const post = await Offer.create({
        ...req.body,
        companyId: req.user._id,
        companyName: company.companyName,
      });

      await Company.findByIdAndUpdate(
        req.user._id,
        { $push: { createdOffers: post._id } },
        { new: true }
      );

      res.status(201).send({ message: "Oferta registrada con éxito", post });
    } catch (error) {
      console.error(error);
      next(error);
    }
  },
  async update(req, res) {
    try {
      const post = await Offer.findByIdAndUpdate(req.params._id, req.body, {
        new: true,
      });
      if (!post) {
        return res.status(404).send({ message: "Offer not found" });
      }
      res.status(201).send({ message: "Oferta actualizada con éxito", post });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem updating the post." });
    }
  },

  async getAll(req, res) {
    try {
      const {
        page = 1,
        limit = 10,
        title,
        location,
        workingMode,
        contractKind,
        workingDayType,
        salaryRange,
        requiredSkills,
        _id,
      } = req.query;

      const searchConditions = {};
      if (title) {
        searchConditions.title = { $regex: new RegExp(title, "i") };
      }
      if (location) {
        searchConditions.location = { $regex: new RegExp(location, "i") };
      }
      if (workingMode) {
        searchConditions.workingMode = { $regex: new RegExp(workingMode, "i") };
      }
      if (contractKind) {
        searchConditions.contractKind = {
          $regex: new RegExp(contractKind, "i"),
        };
      }
      if (workingDayType) {
        searchConditions.workingDayType = {
          $regex: new RegExp(workingDayType, "i"),
        };
      }
      if (salaryRange) {
        searchConditions.salaryRange = { $regex: new RegExp(salaryRange, "i") };
      }
      if (requiredSkills) {
        searchConditions.requiredSkills = { $in: requiredSkills };
      }
      if (_id) {
        searchConditions._id = _id;
      }

      const posts = await Offer.find({ ...searchConditions })
        .populate("likes.talentId")
        .limit(limit)
        .skip((page - 1) * limit);

      res.send({ message: "Here are all matching offers", posts });
    } catch (error) {
      console.error(error);
    }
  },

  async like(req, res) {
    try {
      const post = await Offer.findOne({
        _id: req.params._id,
        "likes.like": true,
        "likes.talentId": req.user._id,
      });
      if (post) {
        return res
          .status(400)
          .send({ message: "Offer already liked by the user." });
      }
      const updatedPost = await Offer.findByIdAndUpdate(
        req.params._id,
        { $push: { likes: { like: true, talentId: req.user._id } } },
        { new: true }
      );
      if (!updatedPost) {
        return res.status(404).send({ message: "Offer not found" });
      }
      await Talent.findByIdAndUpdate(
        req.user._id,
        { $push: { likedOffer: req.params._id } },
        { new: true }
      );

      res
        .status(200)
        .send({ message: "You have liked the offer", updatedPost });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem giving a like to the offer" });
    }
  },
  async unlike(req, res) {
    try {
      const post = await Offer.findOne({
        _id: req.params._id,
        "likes.like": true,
        "likes.talentId": req.user._id,
      });

      if (!post) {
        return res.status(400).send({
          message:
            "This offer is not liked yet. Like it first and then unlike bruh",
        });
      }

      const updatedPost = await Offer.findByIdAndUpdate(
        req.params._id,
        { $pull: { likes: { talentId: req.user._id } } },
        { new: true }
      );

      if (!updatedPost) {
        return res.status(404).send({ message: "Offer not found" });
      }

      await Talent.findByIdAndUpdate(
        req.user._id,
        { $pull: { likedPosts: req.params._id } },
        { new: true }
      );
      res
        .status(200)
        .send({ message: "You have unliked the post", updatedPost });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "There was a problem removing your like from the post",
      });
    }
  },
  async delete(req, res) {
    try {
      const post = await Offer.findByIdAndDelete(req.params._id, { new: true });
      res
        .status(200)
        .send({ message: "You have succesfully deleted the offer", post });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem deleting the offer" });
    }
  },
};

module.exports = OfferController;
