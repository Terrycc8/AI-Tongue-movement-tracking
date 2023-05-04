"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tongueRoute = void 0;
const express_1 = require("express");
const tongue_service_1 = require("../tongue.service");
const knex_1 = require("../knex");
const tongue_controller_1 = require("../tongue.controller");
exports.tongueRoute = (0, express_1.Router)();
let knex = (0, knex_1.newKnex)();
let tongueService = new tongue_service_1.TongueService(knex);
let tongueController = new tongue_controller_1.TongueController(tongueService);
exports.tongueRoute.use(tongueController.router);