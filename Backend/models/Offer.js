const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const OfferSchema = new mongoose.Schema({
  companyId: {
    type: ObjectId,
    ref: "Company",
  },
  title: {
    type: String,
    // required: [true, "Please write a title of the offer"],
  },
  content: {
    type: String,
    // required: [true, "Please write some content for your offer"],
  },
  location: {
    type: String,
    // required: [true, "Please write a location of the offer"],
  },
  workMode: {
    type: String,
    //presencial, h'ibrido, teletrabajo
    // required: [true, "Please write a workMode of the offer"],
  },
  workDay: {
    // dia completo, mediodia
    type: String,
    // required: [true, "Please write a workDay of the offer"],
  },
  contract: {
    //  contrato indefinido, formativo, otros
    type: String,
  },

  salary: {
    type: String,

    // required: [true, "Please write a salary of the offer"],
  },

  requiredSkills: [],
  likes: [
    {
      talentId: ObjectId,
      like: Boolean,
    },
  ],
});

const Offer = mongoose.model("Offer", OfferSchema);

module.exports = Offer;
