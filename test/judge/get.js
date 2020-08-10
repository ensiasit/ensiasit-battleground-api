const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (username, notFoundUsername) => {
  describe("GET /api/judges", () => {
    it("Should return all judges", (done) => {
      chai
        .request(server)
        .get("/api/judges")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("GET /api/judges/:username", () => {
    it("Should return the judge", (done) => {
      chai
        .request(server)
        .get(`/api/judges/${username}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not return the judge - Judge not found", (done) => {
      chai
        .request(server)
        .get(`/api/judges/${notFoundUsername}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });
  });
};
