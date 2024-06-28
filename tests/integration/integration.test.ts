import { app, request, expect } from "./config/helpers";


describe("Integration tests.", () => {

  describe('GET /', () => {
    it('Should return the message "Hello, world"', (done) => {
      request(app)
        .get('/')
        .end((error, res) => {
          expect(res.status).to.equal(200);
          expect(res.text).to.be.equal('Hello, world.');
          done(error);
        })
    })
  })
  
  describe("GET /api/users/all", () => {
    it("Should return a JSON with all users.", (done) => {
      request(app)
        .get("/api/users/all")
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });
  describe("GET /api/users/:id", () => {
    it("Should return a JSON with a specific user by ID.", (done) => {
      request(app)
        .get(`/api/users/${1}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });
  describe("POST /api/users/new", () => {
    it("Should create a new user.", (done) => {
      const user = {
        nome: "Teste",
      };
      request(app)
        .post(`/api/users/new`)
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });
  describe("PUT /api/users/:id/edit", () => {
    it("Should edit an user by ID..", (done) => {
      const user = {
        nome: "TesteUpdate",
      };

      request(app)
        .put(`/api/users/${1}/edit:`)
        .send(user)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });
  describe("DELETE /api/users/:id", () => {
    it("Should delete an user by ID.", (done) => {
      request(app)
        .put(`/api/users/${1}`)
        .end((error, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });
});
