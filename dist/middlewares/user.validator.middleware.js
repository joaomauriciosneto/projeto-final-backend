"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidator = void 0;
const userList_1 = require("../data/userList");
const userValidator = (req, res, next) => {
    const { email } = req.body;
    const userName = userList_1.usersList.some(user => user.email === email);
    if (userName) {
        return res.status(400).send({
            ok: false,
            message: 'Email already exists!'
        });
    }
    next();
};
exports.userValidator = userValidator;
