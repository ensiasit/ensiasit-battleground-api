const { collection, validatePOST, validatePUT } = require("../models/resource");

const connect = require("../database/database");

const getAll = async (next) => {
  const database = connect();
  const resources = database.get(collection);
  let result = null;
  try {
    result = await resources.find({});
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const getOne = async (_id, next) => {
  const database = connect();
  const resources = database.get(collection);
  let result = null;
  try {
    result = await resources.findOne({ _id });
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const addOne = async (record, next) => {
  const database = connect();
  const resources = database.get(collection);
  let result = null;
  try {
    const validRecord = await validatePOST(record);
    result = await resources.insert(validRecord);
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const updateOne = async (_id, record, next) => {
  const database = connect();
  const resources = database.get(collection);
  let result = null;
  try {
    const validRecord = await validatePUT(record);
    result = await resources.update({ _id }, { $set: validRecord });
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const deleteOne = async (_id, next) => {
  const database = connect();
  const resources = database.get(collection);
  let result = null;
  try {
    result = await resources.remove({ _id });
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

module.exports = {
  getAll,
  getOne,
  addOne,
  updateOne,
  deleteOne,
};
