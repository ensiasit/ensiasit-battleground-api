const { NotFoundError } = require("../errors");

const notFound = (schema) =>
  schema.post(/find.+/, (res, next) => {
    return res ? next() : next(NotFoundError());
  });

module.exports = {
  notFound,
};
