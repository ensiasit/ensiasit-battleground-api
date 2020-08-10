module.exports = (message = "Not Found") => {
  const error = new Error(message);
  error.isNotFound = true;
  return error;
};
