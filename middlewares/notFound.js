const notFound = (req, res, next) => {
  const send = res.send;
  res.send = function (body) {
    const bodyObj = JSON.parse(body);
    switch (req.method) {
      case "GET":
        if (bodyObj === null) {
          res.statusCode = 404;
          res.statusMessage = "Resource not found.";
        }
        break;
      case "PUT":
      case "DELETE":
        if (bodyObj && bodyObj.n === 0) {
          res.statusCode = 404;
          res.statusMessage = "Resource not found.";
        }
        break;
    }
    send.call(this, body);
  };
  next();
};

module.exports = notFound;
