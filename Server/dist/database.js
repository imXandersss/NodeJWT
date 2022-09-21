"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://xander:qqqquuuueeee123@digesetdb.xqw4ajo.mongodb.net/?retryWrites=true&w=majority", {})
    .then(db => console.log('Database is conected'))
    .catch((err) => console.log(err));
//# sourceMappingURL=database.js.map