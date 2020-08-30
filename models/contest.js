const mongoose = require("../mongo");

const { notFound } = require("./plugins");

const contestSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  logo: {
    type: String,
    default: "/default_logo.png"
  },
  starttime: Date,
  duration: Number,
});

notFound(contestSchema);

const contestModel = mongoose.model("Contest", contestSchema);

module.exports = contestModel;
