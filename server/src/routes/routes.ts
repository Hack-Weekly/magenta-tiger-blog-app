import { Request, Response, Router } from 'express';
import { PostC } from '../controller/post';

export const routes = Router();

// Server health check
routes.get('/health', (req: Request, res: Response) => res.send({
  message: 'Magenta Tiger Blog App is up and running',
  code: 200,
}));

// Create Post
routes.post('/create', (req: Request, res: Response) => new PostC().createPost(req, res));
