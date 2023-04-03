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

// Delete Post
routes.delete('/post/:id', (req: Request, res: Response) => new PostC().deletePost(req, res));

// Update Post
routes.put('/post/:id', (req: Request, res: Response) => new PostC().updatePost(req, res));

// Get all Posts
routes.get('/posts', (req: Request, res: Response) => new PostC().getAllPosts(req, res));

// Get Post by Id
routes.get('/post/:id', (req: Request, res: Response) => new PostC().getPostById(req, res));
