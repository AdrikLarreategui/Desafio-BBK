const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is obligatory to register"],
    },
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
    talentProfile: {
      type: {
        name: String,
        surnames: String,
        telephone: String,
        birthdate: Date,
        education: [],
        skills: [],
        interests: [],
        languages: [
          {
            language: String,
            proficiency: String,
          },
        ],
        awards: [],
        aboutTheTalent: [],
        profileImg: "String",
        likedOffers: [
          /*{ type: ObjectId, ref: "Offer" }*/
        ],
        appliedOffers: [
          /*{ type: ObjectId, ref: "Offer" }*/
        ],
        ratings: [
          {
            entity_id: ObjectId,
            rating: Number,
          },
        ],
      },
      default: null,
    },
    companyProfile: {
      type: {
        company_name: String,
        industry: String,
        location: String,
        telephone: String,
        website: String,
        socialNumber: String,
        numberOfEmployees: [String],
        description: String,
        logoUrl: String,
        postedOffers: [
          /*{ type: ObjectId, ref: "Offer" }*/
        ],
        likedCandidates: [
          /*{ type: ObjectId, ref: "User" }*/
        ],
        ratings: [
          {
            candidate_id: ObjectId,
            rating: Number,
          },
        ],
      },
      default: null,
    },
  },
  { timestamps: true }
);
UserSchema.methods.toJSON = function () {
  const user = this._doc;
  delete user.tokens;
  delete user.password;
  return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
