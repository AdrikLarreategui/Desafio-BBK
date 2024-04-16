const Talent = require("../models/Talent");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const TalentController = {
  async create(req, res, next) {
    try {
      let password;
      if (req.body.password) {
        password = bcrypt.hashSync(req.body.password, 10);
      }
      const userData = {
        ...req.body,
        password,
        role: "talent",
      };

      const talent = await Talent.create(userData);

      res.status(201).send({ message: "User succesfully registered", talent });
    } catch (error) {
      console.error(error);

      next(error);
    }
  },

  async login(req, res) {
    try {
      const user = await Talent.findOne({ email: req.body.email });
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
      const token = jwt.sign(
        { _id: user._id /*type: user.type*/ },
        process.env.JWT_SECRET
      );

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
      await Talent.findByIdAndUpdate(req.user._id, {
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
      const users = await Talent.find();
      res.status(200).send({ message: "Succesfully retrieved users", users });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },

  async delete(req, res) {
    try {
      const user = await Talent.findByIdAndDelete(req.params._id, {
        new: true,
      });
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
  async update(req, res) {
    try {
      console.log('estoy en update')
      const talent = await Talent.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
      );
      if(!talent) {
        return res.send({ message: "Talent not found" });
      }
      res.send(talent);
    } 
    catch (error) {
      console.error(error);
    }
  },
};

module.exports = TalentController;
