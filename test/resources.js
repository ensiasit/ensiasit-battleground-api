const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../index");

describe("Resources", () => {
  let resource = {
    field1: "a dummy",
    field2: 100,
    field3: "http://www.google.com",
  };

  describe("Add a new resource", () => {
    it("Should add a new resource", (done) => {
      chai
        .request(server)
        .post("/api/resources")
        .send(resource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");
          expect(res.body).to.have.property("_id");
          resource = res.body;
          done();
        });
    });

    it("Should not add resource - field1 required", (done) => {
      const { field1, ...invalidResource } = resource;
      chai
        .request(server)
        .post("/api/resources")
        .send(invalidResource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          expect(res.text).to.contain("ValidationError");
          expect(res.text).to.contain("field1");
          done();
        });
    });

    it("Should not add resource - field1 invalid", (done) => {
      const invalidResource = {
        ...resource,
        field1: "This is an invalid field1",
      };
      chai
        .request(server)
        .post("/api/resources")
        .send(invalidResource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          expect(res.text).to.contain("ValidationError");
          expect(res.text).to.contain("field1");
          done();
        });
    });

    it("Should not add resource - field2 required", (done) => {
      const { field2, ...invalidResource } = resource;
      chai
        .request(server)
        .post("/api/resources")
        .send(invalidResource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          expect(res.text).to.contain("ValidationError");
          expect(res.text).to.contain("field2");
          done();
        });
    });

    it("Should not add resource - field2 invalid", (done) => {
      const invalidResource = {
        ...resource,
        field2: -1,
      };
      chai
        .request(server)
        .post("/api/resources")
        .send(invalidResource)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          expect(res.text).to.contain("ValidationError");
          expect(res.text).to.contain("field2");
          done();
        });
    });

    it("Should not add resource - field3 invalid", (done) => {
      const invalidResource = {
        ...resource,
        field3: "An invalid URI",
      };
      chai
        .request(server)
        .post("/api/resources")
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

  describe("Get all resources", () => {
    it("Should return all resources", (done) => {
      chai
        .request(server)
        .get("/api/resources")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          // expect(res.body).to.have.length(1);
          done();
        });
    });
  });
});
