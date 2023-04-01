import express, { Application } from 'express';
import { createServer } from 'http';
import { config } from './config';

const app: Application = express();

app.use(express.json());

const server = createServer(app);

server.listen(config.port, () => {
  console.log(`Magenta Tiger Blog App is runnign on port ${config.port}`);
});
