const mongoose = require("../mongo");
const { notFound } = require("./plugins");
const { mongo } = require("../mongo");
const judgeModel = require("./judge");

const participantSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    name: String,
    password: String,
    organisation: String,
    email: String
});

notFound(participantSchema);

const participantModel = mongoose.model("Participant", participantSchema);

module.exports = judgeModel;