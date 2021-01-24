"use strict";
exports.__esModule = true;
exports.calcAdditionalMeasuresHeight = exports.calcMainMeasuresHeight = void 0;
var constants_1 = require("../constants");
var ruler_1 = require("../components/ruler");
var calcMainMeasuresHeight = function () { return constants_1.RULER_HEIGHT / ruler_1.mainMeasuresCount; };
exports.calcMainMeasuresHeight = calcMainMeasuresHeight;
var calcAdditionalMeasuresHeight = function () { return calcMainMeasuresHeight() / constants_1.ADDITIONAL_MEASURES_COUNT; };
exports.calcAdditionalMeasuresHeight = calcAdditionalMeasuresHeight;
