const User = require("../models/User");
const Talent = require("../models/Talent");
require("dotenv").config();

const jwt = require("jsonwebtoken");

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    let talent = await Talent.findOne({ _id: payload._id, tokens: token });
let company = await Company.findOne({_id: payload._id, tokens:token })
    // if (!user) {
    //   user = await Company.findOne({ _id: payload._id, tokens: token });
    // }
 
    talent ? talent : company

    if (!talent && !company) {
      return res.status(401).send({ message: "No estás autorizado" });
    }

   (req.talent = talent) || (req.company = company)
    
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
