const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (id) => {
  describe("DELETE /api/resources/:id", () => {
    it("Should delete the resource", (done) => {
      chai
        .request(server)
        .delete(`/api/resources/${id}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
};
