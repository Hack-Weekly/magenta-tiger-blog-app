import express, { Application, Request, Response, Router } from 'express';
import { connect } from 'mongoose';
import { config } from './config';
import { routes } from './routes/routes';
import cors from 'cors';

const app: Application = express();

export const router: Router = express.Router();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.get('/', (req: Request, res: Response) =>
  res.send({
    message: 'Magenta Tiger blog app server is up and running',
    code: 200,
  })
);

app.use(routes);

connect(config.dbUrl)
  .then(() => {
    console.log('Connected to database successfully...');

    app.listen(config.port, () => {
      console.log(`Magenta Tiger Blog App is runnign on port ${config.port}`);
    });
  })
  .catch((error) => console.log('Could not connect to database', error));
