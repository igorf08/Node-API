"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
describe("Integration tests.", function () {
    describe('GET /', function () {
        it('Should return the message "Hello, world"', function (done) {
            (0, helpers_1.request)(helpers_1.app)
                .get('/')
                .end(function (error, res) {
                (0, helpers_1.expect)(res.status).to.equal(200);
                (0, helpers_1.expect)(res.text).to.be.equal('Hello, world.');
                done(error);
            });
        });
    });
    describe("GET /api/users/all", function () {
        it("Should return a JSON with all users.", function (done) {
            (0, helpers_1.request)(helpers_1.app)
                .get("/api/users/all")
                .end(function (error, res) {
                (0, helpers_1.expect)(res.status).to.equal(200);
            });
        });
    });
    describe("GET /api/users/:id", function () {
        it("Should return a JSON with a specific user by ID.", function (done) {
            (0, helpers_1.request)(helpers_1.app)
                .get("/api/users/".concat(1))
                .end(function (error, res) {
                (0, helpers_1.expect)(res.status).to.equal(200);
            });
        });
    });
    describe("POST /api/users/new", function () {
        it("Should create a new user.", function (done) {
            var user = {
                nome: "Teste",
            };
            (0, helpers_1.request)(helpers_1.app)
                .post("/api/users/new")
                .send(user)
                .end(function (error, res) {
                (0, helpers_1.expect)(res.status).to.equal(200);
            });
        });
    });
    describe("PUT /api/users/:id/edit", function () {
        it("Should edit an user by ID..", function (done) {
            var user = {
                nome: "TesteUpdate",
            };
            (0, helpers_1.request)(helpers_1.app)
                .put("/api/users/".concat(1, "/edit:"))
                .send(user)
                .end(function (error, res) {
                (0, helpers_1.expect)(res.status).to.equal(200);
            });
        });
    });
    describe("DELETE /api/users/:id", function () {
        it("Should delete an user by ID.", function (done) {
            (0, helpers_1.request)(helpers_1.app)
                .put("/api/users/".concat(1))
                .end(function (error, res) {
                (0, helpers_1.expect)(res.status).to.equal(200);
            });
        });
    });
});
