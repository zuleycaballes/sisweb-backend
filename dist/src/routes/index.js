"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = __importDefault(require("./productRoutes"));
const personRoutes_1 = __importDefault(require("./personRoutes"));
const comedorRoutes_1 = __importDefault(require("./comedorRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use('/product', productRoutes_1.default);
apiRouter.use('/person', personRoutes_1.default);
apiRouter.use('/comedor', comedorRoutes_1.default);
exports.default = apiRouter;
