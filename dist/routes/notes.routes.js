"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRouter = void 0;
const express_1 = require("express");
const Notes_controller_1 = require("../controllers/Notes.controller");
const User_controller_1 = require("../controllers/User.controller");
const user_validator_middleware_1 = require("../middlewares/user.validator.middleware");
exports.notesRouter = (0, express_1.Router)();
// ##################### USERS ##########################
exports.notesRouter.get('/users', new User_controller_1.UsersController().listAllUser);
exports.notesRouter.get('/users/:idUser', new User_controller_1.UsersController().listUserById);
exports.notesRouter.post('/users', [user_validator_middleware_1.userValidator], new User_controller_1.UsersController().registerUser);
exports.notesRouter.put('/users/:email', new User_controller_1.UsersController().editUser);
exports.notesRouter.delete('/users/:idUser', new User_controller_1.UsersController().deleteUser);
exports.notesRouter.post('/login', new User_controller_1.UsersController().login);
//##################### NOTES #############################
exports.notesRouter.post('/:idUser', new Notes_controller_1.NotesController().createNote);
exports.notesRouter.get('/:idUser', new Notes_controller_1.NotesController().listNotesByUser);
exports.notesRouter.put('/:idUser/:idNote', new Notes_controller_1.NotesController().editNote);
exports.notesRouter.delete('/:idUser/:idNote', new Notes_controller_1.NotesController().deleteNote);
exports.notesRouter.put('/flag/:idUser/:idNote', new Notes_controller_1.NotesController().savedNotes);
exports.notesRouter.get('/flag/:idUser/', new Notes_controller_1.NotesController().listAllSavedNotes);
