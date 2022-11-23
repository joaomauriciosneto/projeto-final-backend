"use strict";
// import express from 'express';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
// import { notesRouter } from './routes/notes.routes';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// export const app = express();
// app.use(express.json());
// app.use(cors());
// app.use('/notes', notesRouter);
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const notes_routes_1 = require("./routes/notes.routes");
const data_source_1 = require("./data-source");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/notes', notes_routes_1.notesRouter);
data_source_1.DatabaseConnection.connect().then(() => {
    console.log('Connection established! 🏆️');
    app.listen(process.env.PORT, () => {
        console.log("Server active on port: " + process.env.PORT);
    });
});
