const postTest = require("./post");
const putTest = require("./put");
const getTest = require("./get");
const deleteTest = require("./delete");

const judge = {
  name: "ENSIAS IT",
  username: "ensias-it",
  password: "P455w0rd",
  email: "ensias-it@gmail.com",
};

postTest(judge);

// putTest(judge.username, "invalid-username", judge);

// getTest(judge.username, "invalid-username");

// deleteTest(judge.username, "invalid-username");
