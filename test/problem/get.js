const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (slug, notFoundSlug) => {
    describe("GET /api/problems", () => {
      it("Should return all problems", (done) => {
        chai
          .request(server)
          .get("/api/problems")
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });
    });
  
    describe("GET /api/problems/:slug", () => {
      it("Should return the problem", (done) => {
        chai
          .request(server)
          .get(`/api/problems/${slug}`)
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });
  
      it("Should not return the problem - Problem not found", (done) => {
        chai
          .request(server)
          .get(`/api/judges/${notFoundSlug}`)
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
          });
      });
    });
  };
  