"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
var express_1 = require("express");
var route_1 = require("@modules/encript_words/infra/http/route/route");
var route = (0, express_1.Router)();
exports.route = route;
route.use('/encripts', route_1.encriptRoute);
