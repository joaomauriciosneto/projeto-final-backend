import { appDataSource } from "../data-source";
import { NoteEntity } from "../entities/note.entity";

export const noteRepository = appDataSource.getRepository(NoteEntity);