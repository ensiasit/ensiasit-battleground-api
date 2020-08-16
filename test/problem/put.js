const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (slug, notFoundSlug, problem) => {
  describe("PUT /api/problems/:slug", () => {
    it("Should update the problem", (done) => {
      chai
        .request(server)
        .put(`/api/problems/${slug}`)
        .send(problem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not update the problem - Problem not found", (done) => {
      chai
        .request(server)
        .put(`/api/problems/${notFoundSlug}`)
        .send(problem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });

    it("Should not update the problem - title invalid", (done) => {
      const invalidProblem = {
        ...problem,
        title: "A very long long long title is not supported",
      };
      chai
        .request(server)
        .put(`/api/judges/${slug}`)
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not update the problem - Slug invalid", (done) => {
      const invalidProblem = {
        ...problem,
        slug: "A slug with spaces is not supported",
      };
      chai
        .request(server)
        .put(`/api/judges/${slug}`)
        .send(invalidProblem)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });
};
