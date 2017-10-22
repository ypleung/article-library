var supertest = require("supertest");
var should = require("should");


// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");


describe("Article Library Server", function() {
  describe("GET /article", function(error, response) {
    it("Returns status code 200", function(done) {
      server
        .get("/article")
        .end( function(error, res, body) {
          res.status.should.equal(200);
          done();
        });
    });

    it("Returns status code 404 when url not correct", function(done) {
      server
        .get("/articles")
        .end( function(error, res, body) {
          res.status.should.equal(404);
          done();
        });
    });

    it("Passing in path term='the' should result in a match ", function(done) {
      server
        .get("/article/the")
        .end( function(error, res, body) {
          res.status.should.equal(200);
          done();
        });
    });

  });
});
