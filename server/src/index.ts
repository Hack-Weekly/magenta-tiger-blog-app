import cors from 'cors';
import express, {
  Application, Request, Response, Router,
} from 'express';
import { connect } from 'mongoose';
import cron from 'node-cron';
import { config } from './config';
import { routes } from './routes/routes';

const app: Application = express();

export const router: Router = express.Router();

app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());

app.get('/', (req: Request, res: Response) => res.send({
  message: 'Magenta Tiger blog app server is up and running',
  code: 200,
}));

cron.schedule('*/10 * * * *', () => console.log('The server is live'));

app.use(routes);

connect(config.dbUrl)
  .then(() => {
    console.log('Connected to database successfully...');

    app.listen(config.port, () => {
      console.log(`Magenta Tiger Blog App is running on port ${config.port}`);
    });
  })
  .catch((error) => console.log('Could not connect to database', error));
