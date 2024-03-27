const User = require("../models/User");
// const Post = require("../models/Post.js");
// const Comment = require("../models/Comment.js");
require("dotenv").config();

const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    let user;

    const Model = payload.type === "talent" ? Talent : Company;

    user = await Model.findOne({ _id: payload._id, tokens: token });

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

module.exports = { authentication, isAdmin };
