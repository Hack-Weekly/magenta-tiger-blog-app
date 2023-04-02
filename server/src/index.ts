import express, {
  Application, Request, Response, Router,
} from 'express';
import { config } from './config';
import { routes } from './routes/routes';

const app: Application = express();

export const router: Router = express.Router();

app.use(express.json());

app.get('/', (req: Request, res: Response) => res.send({
  message: 'Magenta Tiger blog app server is up and running',
  code: 200,
}));

app.use(routes);

app.listen(config.port, () => {
  console.log(`Magenta Tiger Blog App is runnign on port ${config.port}`);
});
