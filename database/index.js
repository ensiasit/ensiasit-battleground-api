const { MONGO_HOST, MONGO_PORT, MONGO_DB } = process.env;
const monk = require("monk");

module.exports = () => monk(`${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`);
