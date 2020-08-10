const { collection, validatePOST, validatePUT } = require("../models/judge");

const connect = require("../database/database");

const getAll = async (next) => {
  const database = connect();
  const judges = database.get(collection);
  let result = null;
  try {
    result = await judges.find({});
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const getOne = async (username, next) => {
  const database = connect();
  const judges = database.get(collection);
  let result = null;
  try {
    result = await judges.findOne({ username });
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const addOne = async (record, next) => {
  const database = connect();
  const judges = database.get(collection);
  let result = null;
  try {
    const validRecord = await validatePOST(record);
    result = await judges.insert(validRecord);
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const updateOne = async (username, record, next) => {
  const database = connect();
  const judges = database.get(collection);
  let result = null;
  try {
    const validRecord = await validatePUT(record);
    result = await judges.update({ username }, { $set: validRecord });
    next(result);
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const deleteOne = async (username, next) => {
  const database = connect();
  const judges = database.get(collection);
  let result = null;
  try {
    result = await judges.remove({ username });
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
