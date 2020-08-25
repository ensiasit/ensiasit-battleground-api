const postTest = require("./post");

const contest = {
    name: "ENSIAS Coding Challenge",
    description: "This is contest description",
    logo: "http://ensiasit.club/assets/sprites/logo.png",
    start_time: new Date("2020-08-25T12:00:00Z"), // ISO format
    duration: 300 // in mins
};

postTest(contest);
