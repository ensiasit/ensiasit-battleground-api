const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (clarification) => {
	describe("POST /api/clarifications", () => {
		it("Should add a new clarification", (done) => {
			chai
				.request(server)
				.post("/api/clarifications")
				.send(clarification)
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(200);
					done();
				});
		});

		it("Should not add a new clarification - username required", (done) => {
			const { username, ...invalidClarification } = clarification;
			chai
				.request(server)
				.post("/api/clarifications")
				.send(invalidClarification)
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(400);
					done();
				});
		});

		it("Should not add a new clarification - problem slug required", (done) => {
			const { problem_slug, ...invalidClarification } = clarification;
			chai
				.request(server)
				.post("/api/clarifications")
				.send(invalidClarification)
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(400);
					done();
				});
		});

		it("Should not add a new clarification - text required", (done) => {
			const { text, ...invalidClarification } = clarification;
			chai
				.request(server)
				.post("/api/clarifications")
				.send(invalidClarification)
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(400);
					done();
				});
		});

		it("Should not add a new clarification - username invalid", (done) => {
			const invalidClarification = { 
				...clarification,
				username: "AUsernameThatDoesNotExist",
			};
			chai
				.request(server)
				.post("/api/clarifications")
				.send(invalidClarification)
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(400);
					done();
				});
		});

		it("Should not add a new clarification - problem slug invalid", (done) => {
			const invalidClarification = { 
				...clarification,
				problem_slug: "a-problem-that-does-not-exist",
			};
			chai
				.request(server)
				.post("/api/clarifications")
				.send(invalidClarification)
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(400);
					done();
				});
		});
	});
}
