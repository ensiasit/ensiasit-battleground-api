const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (username, notFoundUsername, judge) => {
  describe("PUT /api/judges/:username", () => {
    it("Should update the judge", (done) => {
      chai
        .request(server)
        .put(`/api/judges/${username}`)
        .send(judge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not update the judge - Judge not found", (done) => {
      chai
        .request(server)
        .put(`/api/judges/${notFoundUsername}`)
        .send(judge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });

    it("Should not update the judge - name invalid", (done) => {
      const invalidJudge = {
        ...judge,
        name: "A very long name is not supported",
      };
      chai
        .request(server)
        .put(`/api/judges/${username}`)
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not update the judge - username invalid", (done) => {
      const invalidJudge = {
        ...judge,
        username: "A username with spaces is not supported",
      };
      chai
        .request(server)
        .put(`/api/judges/${username}`)
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not update the judge - password invalid", (done) => {
      const invalidJudge = {
        ...judge,
        password: "short",
      };
      chai
        .request(server)
        .put(`/api/judges/${username}`)
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not update the judge - email invalid", (done) => {
      const invalidJudge = {
        ...judge,
        email: "Should be a valid email",
      };
      chai
        .request(server)
        .put(`/api/judges/${username}`)
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });
};
