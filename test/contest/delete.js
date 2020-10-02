const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (name, notFoundName) => {
  describe("DELETE /api/contests/:name", () => {
    it("Should delete the contest", (done) => {
      chai
        .request(server)
        .delete(`/api/contests/${name}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not delete the contest - Contest not found", (done) => {
      chai
        .request(server)
        .delete(`/api/contests/${notFoundName}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });
  });
};
