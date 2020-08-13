const Judge = require("../models/judge");

const { NotFoundError, AlreadyExists } = require("../errors");

const getAll = async () => {
  try {
    const judges = Judge.find({});
    return judges;
  } catch (err) {
    throw err;
  }
};

const getOne = async (username) => {
  try {
    const judge = await Judge.findOne({ username });
    return judge;
  } catch (err) {
    throw NotFoundError(`No judge with username '${username}' exists`);
  }
};

const addOne = async (payload) => {
  try {
    await Judge.init();
    const judge = await Judge.create(payload);
    return judge;
  } catch (err) {
    throw AlreadyExists(
      `Judge with username '${payload.username}' already exists`
    );
  }
};

const updateOne = async (username, payload) => {
  try {
    const judge = await Judge.findOneAndUpdate({ username }, payload);
    return judge;
  } catch (err) {
    if (err.status) {
      throw NotFoundError(`No judge with username '${username}' exists`);
    } else {
      throw AlreadyExists(
        `Judge with username '${payload.username}' already exists`
      );
    }
  }
};

const deleteOne = async (username) => {
  try {
    const judge = await Judge.findOneAndRemove({ username });
    return judge;
  } catch (err) {
    throw NotFoundError(`No judge with username '${username}' exists`);
  }
};

module.exports = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteOne,
};
