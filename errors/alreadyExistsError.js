module.exports = (message = "Already exists") => {
  const error = new Error(message);
  error.isAlreadyExists = true;
  return error;
};
