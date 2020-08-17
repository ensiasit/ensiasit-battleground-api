const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (problem) => {
  describe("POST /api/problems", () => {
    it("Should add a new problem", (done) => {
      chai
        .request(server)
        .post("/api/problems")
        .send(problem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not add a new problem - Already exists", (done) => {
      chai
        .request(server)
        .post("/api/problems")
        .send(problem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(403);
          done();
        });
    });

    it("Should not add a new problem - slug required", (done) => {
      const { slug, ...invalidProblem } = problem;
      chai
        .request(server)
        .post("/api/problems")
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new problem - title required", (done) => {
      const { title, ...invalidProblem } = problem;
      chai
        .request(server)
        .post("/api/problems")
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new problem - text required", (done) => {
      const { text, ...invalidProblem } = problem;
      chai
        .request(server)
        .post("/api/problems")
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new problem - Verification requirability required", (done) => {
      const { verification_required, ...invalidProblem } = problem;
      chai
        .request(server)
        .post("/api/problems")
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new problem - Activity status required", (done) => {
      const { active, ...invalidProblem } = problem;
      chai
        .request(server)
        .post("/api/problems")
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new problem - Submission allowability required", (done) => {
      const { allow_submit, ...invalidProblem } = problem;
      chai
        .request(server)
        .post("/api/problems")
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new problem - Title invalid", (done) => {
      const invalidProblem = {
        ...judge,
        title: "A very long long long title is not supported",
      };
      chai
        .request(server)
        .post("/api/problems")
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new problem - Slug invalid", (done) => {
      const invalidProblem = {
        ...problem,
        slug: "A slug with spaces is not supported",
      };
      chai
        .request(server)
        .post("/api/problems")
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });
};
