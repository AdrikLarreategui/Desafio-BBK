const express = require("express");
const app = express();
const cron = require("node-cron");
const fs = require("fs");
const { Parser } = require("json2csv");
const { dbConnection } = require("./config/config");
const { typeError } = require("./middlewares/errors");

require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
dbConnection();
app.use("/users", require("./routes/users"));
app.use("/talents", require("./routes/talents"));
app.use("/companies", require("./routes/companies"));
app.use("/offers", require("./routes/offers"));
app.use(typeError);
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));

const Talent = require("./models/Talent");
const Offer = require("./models/Offer");

cron.schedule("*/5 * * * *", async () => {
  const talents = await Talent.find({});
  const offers = await Offer.find({});

  fs.writeFileSync("./output/talents.json", JSON.stringify(talents, null, 2));
  fs.writeFileSync("./output/offers.json", JSON.stringify(offers, null, 2));

  const parser = new Parser();
  const csvTalents = parser.parse(talents);
  const csvOffers = parser.parse(offers); // Corrected here

  fs.writeFileSync("./output/talents.csv", csvTalents);
  fs.writeFileSync("./output/offers.csv", csvOffers);
});
