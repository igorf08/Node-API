"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("../../json/dbUsers.json");
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route("/").get(function (req, res) { return res.send("Hello, world."); });
        app.route("/api/users/all").get(function (req, res) { return res.json({ db: db }); });
        app.route("/api/user/:id").get(function (req, res) {
            var id = parseInt(req.params.id);
            var user = db.find(function (user) { return user.id === id; });
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).send({ error: "User with id ".concat(id, " was not found") });
            }
        });
        app.route("/api/users/new").post(function (req, res) {
            var newUser = {
                id: db.length + 1,
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            };
            db.push(newUser);
            res.status(201).json(newUser);
        });
    };
    return Routes;
}());
exports.default = Routes;
