"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        lowcase: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowcase: true
    },
    password: {
        type: String,
        required: true
    }
});
exports.default = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.model.js.map