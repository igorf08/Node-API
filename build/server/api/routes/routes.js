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
    };
    return Routes;
}());
exports.default = Routes;
