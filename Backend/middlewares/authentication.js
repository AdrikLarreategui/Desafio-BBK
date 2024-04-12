const Talent = require("../models/Talent");
const Company = require("../models/Company");
const Offer = require("../models/Offer");
require("dotenv").config();

const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    let user =
      (await Talent.findOne({ _id: payload._id, tokens: token })) ||
      (await Company.findOne({ _id: payload._id, tokens: token }));

    if (!user) {
      return res.status(401).send({ message: "No estás autorizado" });
    }
    req.user = user;

    next();
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .send({ error, message: "Ha habido un problema con el token" });
  }
};

const isAdmin = async (req, res, next) => {
  const admins = ["admin", "superadmin"];

  if (!admins.includes(req.user.role)) {
    return res.status(403).send({
      message: "You do not have permission",
    });
  }

  next();
};

const isAuthorOffer = async (req, res, next) => {
  try {
    const post = await Offer.findById(req.params._id);
    if (post.companyId.toString() !== req.user._id.toString()) {
      return res.status(403).send({ message: "This offer is not yours" });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      error,
      message: "There was a problem verifying authorship",
    });
  }
};

module.exports = { authentication, isAdmin, isAuthorOffer };
