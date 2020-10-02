const Problem = require("../models/problem");

const { NotFoundError, AlreadyExists } = require("../errors");

const getAll = async () => {
  try {
    const problems = Problem.find({});
    return problems;
  } catch (err) {
    throw err;
  }
};

const getOne = async (slug) => {
  try {
    const problem = await Problem.findOne({ slug });
    return problem;
  } catch (err) {
    throw NotFoundError(`No problem with slug '${slug}' exists`);
  }
};

const addOne = async (payload) => {
  try {
    const problem = await Problem.create(payload);
    return problem;
  } catch (err) {
    throw AlreadyExists(
      `Problem with slug '${payload.slug}' already exists`
    );
  }
};

const updateOne = async (slug, payload) => {
  try {
    const problem = await Problem.findOneAndUpdate({ slug }, payload);
    return problem;
  } catch (err) {
    if (err.status) {
      throw NotFoundError(`No problem with slug '${slug}' exists`);
    } else {
      throw AlreadyExists(
        `Problem with slug '${payload.slug}' already exists`
      );
    }
  }
};

const deleteOne = async (slug) => {
  try {
    const problem = await Problem.findOneAndRemove({ slug });
    return problem;
  } catch (err) {
    throw NotFoundError(`No problem with slug '${slug}' exists`);
  }
};

module.exports = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteOne,
};
