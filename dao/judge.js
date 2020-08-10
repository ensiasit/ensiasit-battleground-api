const { collection, validatePOST, validatePUT } = require("../models/judge");

const connect = require("../database");

const NotFoundError = require("../errors/notFoundError");

const getAll = async (next) => {
  const database = connect();
  const judges = database.get(collection);
  try {
    const result = await judges.find({});
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
  try {
    const result = await judges.findOne({ username });
    if (!result) {
      throw NotFoundError();
    } else {
      next(result);
    }
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
  try {
    const validRecord = await validatePUT(record);
    const result = await judges.update({ username }, { $set: validRecord });
    if (result.n === 0) {
      throw NotFoundError();
    } else {
      next(result);
    }
  } catch (err) {
    throw err;
  } finally {
    database.close();
  }
};

const deleteOne = async (username, next) => {
  const database = connect();
  const judges = database.get(collection);
  try {
    const result = await judges.remove({ username });
    if (result.deletedCount === 0) {
      throw NotFoundError();
    } else {
      next(result);
    }
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
