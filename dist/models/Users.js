"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const uuid_1 = require("uuid");
class Users {
    constructor(_email, _password, _notes) {
        var _a;
        this._email = _email;
        this._password = _password;
        this._notes = _notes;
        this._idUser = (0, uuid_1.v4)(),
            this._notes = (_a = this._notes) !== null && _a !== void 0 ? _a : [];
    }
    get id() {
        return this._idUser;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get password() {
        return this._password;
    }
    set password(password) {
        this._password = password;
    }
    get note() {
        return this._notes;
    }
    getUsers() {
        return {
            id: this._idUser,
            email: this._email,
            notes: this._notes,
            password: this._password
        };
    }
}
exports.Users = Users;
