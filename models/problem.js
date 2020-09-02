const mongoose = require("../mongo");

const { notFound } = require("./plugins");

const problemSchema = mongoose.Schema({
  slug: {
    type: String,
    unique: true,
  },
  title: String,
  code: String,
  points: Number,
  colour: String, 
  verification_required: Boolean,
  active: Boolean,
  allow_submit: Boolean,
  text: String,
  time_limit: Number,
  memory_limit: Number,
  compare_script: String,
  test_cases: [{input: String, output: String, description: String}]
});

notFound(problemSchema);

const problemModel = mongoose.model("Problem", problemSchema);

module.exports = problemModel;
