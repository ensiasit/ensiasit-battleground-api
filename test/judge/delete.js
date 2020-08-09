const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (username, notFoundUsername) => {
  describe("DELETE /api/judges/:username", () => {
    it("Should delete the judge", (done) => {
      chai
        .request(server)
        .delete(`/api/judges/${username}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not delete the judge - Judge not found", (done) => {
      chai
        .request(server)
        .delete(`/api/judges/${notFoundUsername}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });
  });
};
