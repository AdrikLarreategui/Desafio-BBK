const Company = require("../models/Company");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const CompanyController = {
  async create(req, res) {
    try {
      let password = req.body.password;
      if (req.body.password) {
        password = bcrypt.hashSync(req.body.password, 10);
      }
      const userData = {
        ...req.body,
        password,
        role: "company",
      };
      const company = await Company.create(userData);
      res
        .status(201)
        .send({ message: "Cuenta de empresa registrada con éxito", company });
    } catch (error) {
      console.error(error);
      //   next(error);
    }
  },

  async login(req, res) {
    try {
      const user = await Company.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(400)
          .send({ message: "usuario o contraseña erróneos" });
      }

      const isMatch = bcrypt.compareSync(req.body.password, user.password);

      if (!isMatch) {
        return res
          .status(401)
          .send({ message: "Usuario o contraseña incorrectos" });
      }

      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      user.tokens.length > 4 ? user.tokens.shift() : user.tokens.push(token);

      await user.save();

      res
        .status(201)
        .send({ message: "user registered", user, tokens: user.tokens });
    } catch (error) {
      console.error(error);
    }
  },

  async logout(req, res) {
    try {
      await Company.findByIdAndUpdate(req.user._id, {
        $pull: { tokens: req.headers.authorization },
      });

      res.status(500).send({ message: "Log out efectuado correctamente" });
    } catch (error) {
      console.error(error);
      res.send("Hubo un problema con el log out");
    }
  },

  async update(req, res) {
    try {
      const company = await Company.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );

      if (!company) {
        return res.send({ message: "Company not found" });
      }
      res.send(company);
    } catch (error) {
      console.error(error);
    }
  },
  async delete(req, res) {
    try {
      const company = await Company.findByIdAndDelete(req.params._id, {
        new: true,
      });

      if (!company) {
        return res.send({ message: "Company doesn't exist" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).send("There was an error deleting the company");
    }
  },

  async getAll(req, res) {
    try {
      const companies = await Company.find();
      res
        .status(200)
        .send({ message: "Succesfully retrieved companies", companies });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },
};
module.exports = CompanyController;
