const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const TalentSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Email is obligatory to register"],
    },
    password: {
      type: String,
      required: [true, "Password is obligatory to register"],
    },
    role: {
      type: String,
    },
    tokens: [],
    name: {
      type: String,
      // required: [true, "Name is obligatory to register"],
    },
    surnames: {
      type: String,
      // required: [true, "Surnames is obligatory to register"],
    },
    telephone: {
      type: Number,
      // required: [true, "Telephone is obligatory to register"],
    },
    birthdate: {
      type: Date,
      // required: [true, "Birthdate is obligatory to register"],
    },
    streetAddress: {
      type: String,
      // required: [true, "Street is obligatory to register"],
    },
    city: {
      type: String,
      // required: [true, "City is obligatory to register"],
    },
    province: {
      type: String,
      // required: [true, "Province is obligatory to register"],
    },
    country: {
      type: String,
      // required: [true, "Country is obligatory to register"],
    },
    postalCode: {
      type: Number,
      // required: [true, "Postal code is obligatory to register"],
    },
    education: [],
    languages: [
      {
        // languageId: String /,
        language: {
          type: String,
          //{ type: ObjectId, ref: "Skill" }
          // required: [true, "Language is obligatory to indicate"],
        },
        proficiency: {
          type: String,
          enum: [
            "Principiante",
            "Básico",
            "Intermedio",
            "Intermedio-Alto",
            "Avanzado",
            "Nativo",
          ],
          required: [true, "Level is obligatory to indicate"],
        },
      },
    ],
    skills: [],

    interests: [],

    awards: [],
    aboutTheTalent: "String",
    profileImg: "String",
    likedOffers: [{ type: ObjectId, ref: "Offer" }],
    appliedOffers: [
      /*{ type: ObjectId, ref: "Offer" }*/
    ],
  },
  { timestamps: true }
);

TalentSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.tokens;
  delete user.password;
  return user;
};

const Talent = mongoose.model("Talent", TalentSchema);

module.exports = Talent;
