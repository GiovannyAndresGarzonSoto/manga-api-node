"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var posterController_1 = require("../controllers/posterController");
var router = (0, express_1.Router)();
router.get('/', posterController_1.posterController.getAll);
router.get('/:id', posterController_1.posterController.getOne);
router.post('/', posterController_1.posterController.add);
router.put('/delete/:id', posterController_1.posterController.delete);
exports.default = router;
