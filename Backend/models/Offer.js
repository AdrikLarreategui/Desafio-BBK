const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const OfferSchema = new mongoose.Schema({
  companyId: {
    type: ObjectId,
    ref: "Company",
  },
  companyName: {
    type: String,
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
  workingMode: {
    type: String,
    //presencial, h'ibrido, teletrabajo
    // required: [true, "Please write a workMode of the offer"],
  },
  workingDayType: {
    // dia completo, mediodia
    type: String,
    // required: [true, "Please write a workDay of the offer"],
  },
  contractKind: {
    //  contrato indefinido, formativo, otros
    type: String,
  },

  salaryRange: {
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
