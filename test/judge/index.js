const postTest = require("./post");
const putTest = require("./put");
const getTest = require("./get");
const deleteTest = require("./delete");

const judge = {
  name: "",
  username: "",
  password: "",
  email: "",
};

postTest(judge);

putTest(judge.username, "invalid-username", judge);

getTest(judge.username, "invalid-username");

deleteTest(judge.username, "invalid-username");
