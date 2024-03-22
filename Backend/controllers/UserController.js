const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserController = {
  async create(req, res, next) {
    try {
      let password;
      if (req.body.password) {
        password = bcrypt.hashSync(req.body.password, 10);
      }

      const user = await User.create({
        ...req.body,
        password,
        role: req.body.role || "candidate",
      });
      if (req.body.role === "talent") {
        delete req.body.company_profile;
      }
      if (req.body.role === "company") {
        delete req.body.talent_profile;
      }

      res.status(201).send({ message: "User succesfully registered", user });
    } catch (error) {
      console.error(error);
      error.origin = "usuario";
      next(error);
    }
  },

  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .send({ message: "User or Password are incorrect" });
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: "User or Password are incorrect" });
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      if (user.tokens.length > 4) user.tokens.shift();
      user.tokens.push(token);
      console.log(token);
      await user.save();
      res.status(200).send({
        message: "Login successful",
        user,
        tokens: user.tokens,
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },

  async logout(req, res) {
    try {
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });

      res.send({ message: "Successfully logged out" });
    } catch (error) {
      console.error(error);

      res.status(500).send({
        message: "There was a problem disconnecting",
      });
    }
  },

  async getAll(req, res) {
    try {
      const users = await User.find();
      res.status(200).send({ message: "Succesfully retrieved users", users });
    } catch (error) {}
  },
  async delete(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params._id, { new: true });
      res
        .status(200)
        .send({ message: "You have succesfully deleted the User", user });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "There was a problem deleting the user" });
    }
  },
};

module.exports = UserController;
