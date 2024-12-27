"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const waka_1 = require("../models/waka");
const constants_1 = require("../constants");
exports.router = express_1.default.Router();
exports.router.get('/', async (req, res) => {
    const filter = req.query['filter']
        ? String(req.query['filter'])
        : constants_1.DEFAULT_FILTER;
    const page = req.query['page'] ? Number(req.query['page']) : constants_1.DEFAULT_PAGE;
    const data = await (0, waka_1.searchWakas)(filter, page);
    res.json(data);
});
