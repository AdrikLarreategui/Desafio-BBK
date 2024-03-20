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
