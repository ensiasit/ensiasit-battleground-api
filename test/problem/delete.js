const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (slug, notFoundSlug) => {
    describe("DELETE /api/problems/:slug", () => {
      it("Should delete the problem", (done) => {
        chai
          .request(server)
          .delete(`/api/problems/${slug}`)
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });

      it("Should not delete the problem - Problem not found", (done) => {
        chai
          .request(server)
          .delete(`/api/problems/${notFoundSlug}`)
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(404);
            done();
          });
      });
    });
  };
  