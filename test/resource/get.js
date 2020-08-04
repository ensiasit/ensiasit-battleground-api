const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (id) => {
  describe("GET /api/resources", () => {
    it("Should return all resources", (done) => {
      chai
        .request(server)
        .get("/api/resources")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });

  describe("GET /api/resources/:id", () => {
    it("Should return the resource", (done) => {
      chai
        .request(server)
        .get(`/api/resources/${id}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
};
