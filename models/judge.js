const mongoose = require("../mongo");

const { notFound } = require("./plugins");

const judgeSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  name: String,
  email: String,
});

notFound(judgeSchema);

const judgeModel = mongoose.model("Judge", judgeSchema);

module.exports = judgeModel;
