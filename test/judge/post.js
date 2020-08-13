const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (judge) => {
  describe("POST /api/judges", () => {
    it("Should add a new judge", (done) => {
      chai
        .request(server)
        .post("/api/judges")
        .send(judge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not add a new judge - Already exists", (done) => {
      chai
        .request(server)
        .post("/api/judges")
        .send(judge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(403);
          done();
        });
    });

    it("Should not add a new judge - name required", (done) => {
      const { name, ...invalidJudge } = judge;
      chai
        .request(server)
        .post("/api/judges")
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new judge - username required", (done) => {
      const { username, ...invalidJudge } = judge;
      chai
        .request(server)
        .post("/api/judges")
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new judge - password required", (done) => {
      const { password, ...invalidJudge } = judge;
      chai
        .request(server)
        .post("/api/judges")
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new judge - email required", (done) => {
      const { email, ...invalidJudge } = judge;
      chai
        .request(server)
        .post("/api/judges")
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new judge - name invalid", (done) => {
      const invalidJudge = {
        ...judge,
        name: "A very long name is not supported",
      };
      chai
        .request(server)
        .post("/api/judges")
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new judge - username invalid", (done) => {
      const invalidJudge = {
        ...judge,
        username: "A username with spaces is not supported",
      };
      chai
        .request(server)
        .post("/api/judges")
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new judge - password invalid", (done) => {
      const invalidJudge = {
        ...judge,
        password: "short",
      };
      chai
        .request(server)
        .post("/api/judges")
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new judge - email invalid", (done) => {
      const invalidJudge = {
        ...judge,
        email: "Should be a valid email",
      };
      chai
        .request(server)
        .post("/api/judges")
        .send(invalidJudge)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });
  });
};
