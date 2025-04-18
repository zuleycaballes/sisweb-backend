"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControler_1 = require("../controllers/productControler");
const productRouter = (0, express_1.Router)();
productRouter.get('/', productControler_1.getAllProducts);
productRouter.get('/:id', productControler_1.getProductById);
productRouter.post('/', productControler_1.createProduct);
productRouter.patch('/:id', productControler_1.modifyProduct);
productRouter.delete('/', productControler_1.deleteProduct);
exports.default = productRouter;
