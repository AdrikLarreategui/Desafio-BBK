const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema(
  {
    // username: {
    //   type: String,
    //   required: [true, "Username is obligatory to register"],
    // },
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
        aboutTheTalent: "String",
        profileImg: "String",
        likedOffers: [
          /*{ type: ObjectId, ref: "Offer" }*/
        ],
        appliedOffers: [
          /*{ type: ObjectId, ref: "Offer" }*/
        ],
      },
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
      },
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (this.role === "talent") {
    this.companyProfile = undefined;
  } else if (this.role === "company") {
    this.talentProfile = undefined;
  }
  next();
});
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.tokens;
  delete user.password;
  return user;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
