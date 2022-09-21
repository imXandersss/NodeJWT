"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
//settings
app.set('port', 3000);
//middlewares
app.use((0, morgan_1.default)('dev'));
app.set(express_1.default.json());
//routes
app.use('/api/auth', auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map