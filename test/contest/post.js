const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (contest) => {
  describe("POST /api/contests", () => {
    it("Should add a new contest", (done) => {
      chai
        .request(server)
        .post("/api/contests")
        .send(contest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not add a new contest - Already exists", (done) => {
      chai
        .request(server)
        .post("/api/contests")
        .send(contest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(403);
          done();
        });
    });

    it("Should not add a new contest - name required", (done) => {
      const { name, ...invalidContest } = contest;
      chai
        .request(server)
        .post("/api/contests")
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new contest - description required", (done) => {
      const { description, ...invalidContest } = problem;
      chai
        .request(server)
        .post("/api/contests")
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new contest - logo required", (done) => {
      const { logo, ...invalidContest } = contest;
      chai
        .request(server)
        .post("/api/contests")
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new contest - start_time required", (done) => {
      const { start_time, ...invalidContest } = contest;
      chai
        .request(server)
        .post("/api/contests")
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not add a new contest - duration required", (done) => {
      const { duration, ...invalidContest } = contest;
      chai
        .request(server)
        .post("/api/contests")
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

  });
};
