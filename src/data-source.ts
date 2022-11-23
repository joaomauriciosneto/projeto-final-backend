// import { app } from "./app";

// const DOOR = process.env.PORT || 3333;

// app.listen(DOOR, () => console.log(`Server starter on port ${DOOR}`));

import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({

  type: 'postgres',
  url: process.env.DB_URL,
  synchronize: false,
  ssl:{
    rejectUnauthorized: false
  },
  schema: 'tasks',
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`]

})

export class DatabaseConnection {

  private static _connection: DataSource;

  public static async connect() {

      if(!this._connection) {
          this._connection = await appDataSource.initialize();
      }

  }

  public static get connection() {
      return this._connection;
  }

}
