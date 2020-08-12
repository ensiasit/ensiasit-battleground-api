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

module.exports = {
  NotFoundError,
  AlreadyExists,
};
