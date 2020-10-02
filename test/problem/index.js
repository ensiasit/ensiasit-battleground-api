const postTest = require("./post");
const putTest = require("./put");
const getTest = require("./get");
const deleteTest = require("./delete");

const problem = {
    slug: "mouna-and-strings",
    title: "Mouna and strings",
    code: "C",
    points: 100,
    colour: "Blue",
    verification_required: false, 
    active: true,
    allow_submit: true,
    text: "This is the problem's test text",
    time_limit: 2000,
    memory_limit: 250000,
    compare_script: "This is a dummy example for a compare script", 
    test_cases: [
        {
            input: "2 3 4 5",
            output: "4 6 8 10",
            description: "just double them"
        },
        {
            input: "0",
            output: "0",
            description: "double zero is zero"
        }
    ]
};

postTest(problem);

putTest(problem.slug, "invalid-slug", problem);

getTest(problem.slug, "invalid-slug");

deleteTest(problem.slug, "invalid-slug");
