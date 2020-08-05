const postTest = require("./post");
const putTest = require("./put");
const getTest = require("./get");
const deleteTest = require("./delete");

const resource = {
  field1: "a dummy",
  field2: 100,
  field3: "http://www.google.com",
};

postTest(resource);

putTest(resource.field1, "dummy", {
  ...resource,
  field3: "http://www.amazon.com",
});

getTest(resource.field1, "dummy");

deleteTest(resource.field1, "dummy");
