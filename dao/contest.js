const Contest = require("../models/contest");

const { NotFoundError, AlreadyExists } = require("../errors");

const getAll = async () => {
  try {
    const contests = Contest.find({});
    return contests;
  } catch (err) {
    throw err;
  }
};

const getOne = async (name) => {
  try {
    const contest = await Contest.findOne({ name });
    return contest;
  } catch (err) {
    throw NotFoundError(`No contest with name '${name}' exists`);
  }
};

const addOne = async (payload) => {
  try {
    const contest = await Contest.create(payload);
    return contest;
  } catch (err) {
    throw AlreadyExists(
      `Contest with name '${payload.name}' already exists`
    );
  }
};

const updateOne = async (name, payload) => {
  try {
    const contest = await Contest.findOneAndUpdate({ name }, payload);
    return contest;
  } catch (err) {
    if (err.status) {
      throw NotFoundError(`No contest with name '${name}' exists`);
    } else {
      throw AlreadyExists(
        `Contest with name '${payload.name}' already exists`
      );
    }
  }
};

const deleteOne = async (name) => {
  try {
    const contest = await Contest.findOneAndRemove({ name });
    return contest;
  } catch (err) {
    throw NotFoundError(`No contest with name '${name}' exists`);
  }
};

module.exports = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteOne,
};
