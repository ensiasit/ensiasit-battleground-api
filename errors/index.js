const NotFoundError = (message = "Not Found") => {
  const error = new Error(message);
  error.status = 404;
  return error;
};

const AlreadyExists = (message = "Alreasy Exists") => {
  const error = new Error(message);
  error.status = 403;
  return error;
};

const BadRequest = (message = "Bad Request") => {
  const error = new Error(message);
  error.status = 400;
  return error;
};

module.exports = {
  NotFoundError,
  AlreadyExists,
  BadRequest,
};
