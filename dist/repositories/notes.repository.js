"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRepository = void 0;
const data_source_1 = require("../data-source");
const note_entity_1 = require("../entities/note.entity");
exports.noteRepository = data_source_1.appDataSource.getRepository(note_entity_1.NoteEntity);
