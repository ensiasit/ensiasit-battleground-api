const postTest = require("./post");
const putTest = require("./put");
const getTest = require("./get");
const deleteTest = require("./delete");

const contest = {
    name: "ENSIAS Coding Challenge",
    description: "This is contest description",
    logo: "http://ensiasit.club/assets/sprites/logo.png",
    start_time: new Date("2020-08-25T12:00:00Z"), // ISO format
    duration: 300 // in mins
};

postTest(contest);

putTest(contest.name, "invalid-name", contest);

getTest(contest.name, "invalid-name");

deleteTest(contest.name, "invalid-name");
