const { MONGO_HOST } = process.env;

const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect(`mongodb://${MONGO_HOST}/ensiasit-battleground`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Unable to connect to MongoDB");
    process.exit(1);
  }
})();

module.exports = mongoose;
