const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (name, notFoundName) => {
  describe("GET /api/contests", () => {
    it("Should return all contests", (done) => {
      chai
        .request(server)
        .get("/api/contests")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe("GET /api/contests/:name", () => {
    it("Should return the contest", (done) => {
      chai
        .request(server)
        .get(`/api/contests/${name}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not return the contest - Contest not found", (done) => {
      chai
        .request(server)
        .get(`/api/contests/${notFoundName}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });
  });
};
