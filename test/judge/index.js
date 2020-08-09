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

putTest(resource.username, "invalid-username", judge);

getTest(resource.username, "invalid-username");

deleteTest(resource.username, "invalid-username");
