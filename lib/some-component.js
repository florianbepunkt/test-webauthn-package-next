"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeComponent = void 0;
const react_1 = __importDefault(require("react"));
const some_compoent_logic_1 = require("./some.compoent.logic");
const SomeComponent = () => {
    const { data, handleAuth } = some_compoent_logic_1.useSomeLogic();
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { type: "button", onClick: () => alert(data) }, "Klick me")));
};
exports.SomeComponent = SomeComponent;
