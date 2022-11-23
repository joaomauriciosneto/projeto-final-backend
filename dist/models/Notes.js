"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notes = void 0;
const uuid_1 = require("uuid");
class Notes {
    constructor(_title, _description, _saveNote = false) {
        this._title = _title;
        this._description = _description;
        this._saveNote = _saveNote;
        this._id = (0, uuid_1.v4)();
    }
    get saveNote() {
        return this._saveNote;
    }
    set saveNote(saveNote) {
        this._saveNote = saveNote;
    }
    get idNotes() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    getNotes() {
        return {
            id: this._id,
            title: this._title,
            description: this._description,
            saved: this._saveNote
        };
    }
}
exports.Notes = Notes;
