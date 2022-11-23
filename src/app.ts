// import express from 'express';
// import cors from 'cors';
// import * as dotenv from 'dotenv';
// import { notesRouter } from './routes/notes.routes';

// dotenv.config();

// export const app = express();

// app.use(express.json());
// app.use(cors());
// app.use('/notes', notesRouter);

import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { notesRouter } from './routes/notes.routes';
import { DatabaseConnection } from './data-source';
import { AppErrors } from './shared/errors/AppErrors';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/notes', notesRouter);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {

  if(error instanceof AppErrors) {
    return res.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error!'
  })

})

DatabaseConnection.connect().then(() => {

  console.log('Connection established! 🏆️'); 

  app.listen(process.env.PORT, () => {
      console.log("Server active on port: " + process.env.PORT);
  });

});

