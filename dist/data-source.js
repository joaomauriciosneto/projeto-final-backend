"use strict";
// import { app } from "./app";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnection = exports.appDataSource = void 0;
// const DOOR = process.env.PORT || 3333;
// app.listen(DOOR, () => console.log(`Server starter on port ${DOOR}`));
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.appDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: false,
    ssl: {
        rejectUnauthorized: false
    },
    schema: 'tasks',
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
});
class DatabaseConnection {
    static async connect() {
        if (!this._connection) {
            this._connection = await exports.appDataSource.initialize();
        }
    }
    static get connection() {
        return this._connection;
    }
}
exports.DatabaseConnection = DatabaseConnection;
