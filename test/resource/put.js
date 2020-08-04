const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (id, resource) => {
  describe("PUT /api/resources/:id", () => {
    it("Should update the resource", (done) => {
      chai
        .request(server)
        .put(`/api/resources/${id}`)
        .send(resource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          done();
        });
    });

    it("Should not update the resource - field1 invalid", (done) => {
      const invalidResource = {
        ...resource,
        field1: "This is an invalid field1",
      };
      chai
        .request(server)
        .put(`/api/resources/${id}`)
        .send(invalidResource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          expect(res.text).to.contain("ValidationError");
          expect(res.text).to.contain("field1");
          done();
        });
    });

    it("Should not update the resource - field2 invalid", (done) => {
      const invalidResource = {
        ...resource,
        field2: -1,
      };
      chai
        .request(server)
        .put(`/api/resources/${id}`)
        .send(invalidResource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          expect(res.text).to.contain("ValidationError");
          expect(res.text).to.contain("field2");
          done();
        });
    });

    it("Should not update the resource - field3 invalid", (done) => {
      const invalidResource = {
        ...resource,
        field3: "An invalid URI",
      };
      chai
        .request(server)
        .put(`/api/resources/${id}`)
        .send(invalidResource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          expect(res.text).to.contain("ValidationError");
          expect(res.text).to.contain("field3");
          done();
        });
    });
  });
};
