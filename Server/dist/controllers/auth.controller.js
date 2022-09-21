"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signIn = exports.signUp = void 0;
const signUp = (req, resp) => {
    console.log(req.body);
};
exports.signUp = signUp;
const signIn = (req, resp) => {
    resp.send('signin');
};
exports.signIn = signIn;
const profile = (req, resp) => {
    resp.send('profile');
};
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map