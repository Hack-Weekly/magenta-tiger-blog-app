import {
  Request, Response, Router,
} from 'express';

export const routes = Router();

// Server health check
routes.get('/health', (req: Request, res: Response) => res.send({
  message: 'Magenta Tiger Blog App is up and running',
  code: 200,
}));
