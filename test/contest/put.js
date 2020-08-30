const chai = require("chai");
const { expect } = chai;

const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../../index");

module.exports = (name, notFoundName, contest) => {
  describe("PUT /api/contests/:name", () => {
    it("Should update the contest", (done) => {
      chai
        .request(server)
        .put(`/api/contests/${name}`)
        .send(contest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it("Should not update the contest - contest not found", (done) => {
      chai
        .request(server)
        .put(`/api/contests/${notFoundName}`)
        .send(contest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(404);
          done();
        });
    });

    it("Should not update the contest - name invalid", (done) => {
      const invalidContest = {
        ...contest,
        name: "A very very very long name is not supported",
      };
      chai
        .request(server)
        .put(`/api/contests/${name}`)
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not update the contest - description invalid", (done) => {
      const invalidContest = {
        ...contest,
        description: "A".repeat(201),
      };
      chai
        .request(server)
        .put(`/api/contests/${name}`)
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not update the contest - starttime invalid", (done) => {
      const invalidContest = {
        ...contest,
        starttime: "Should be a valid time",
      };
      chai
        .request(server)
        .put(`/api/contests/${name}`)
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not update the contest - starttime is less than current time", (done) => {
      var d = new Date();
      d.setDate(d.getDate()-1);
      const invalidContest = {
        ...contest,
        starttime: d.toISOString(),
      };
      chai
        .request(server)
        .put(`/api/contests/${name}`)
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

    it("Should not update the contest - duration invalid", (done) => {
      const invalidContest = {
        ...contest,
        duration: "Should be a double",
      };
      chai
        .request(server)
        .put(`/api/contests/${name}`)
        .send(invalidContest)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        });
    });

  });
};
