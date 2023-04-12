import axios from 'axios';
import { Request, Response, Router } from 'express';
import upload from '../controller/image-upload';
import { PostC } from '../controller/post';

export const routes = Router();

// Server health check
routes.get('/health', (req: Request, res: Response) => res.send({
  message: 'Magenta Tiger Blog App is up and running',
  code: 200,
}));

// Github OAuth
routes.get('/login', async (req: Request, res: Response) => res.redirect(
  `https://github.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&scope=repo`,
));

const response = {
  token: '',
  success: false,
  message: '',
  data: {},
};

routes.get('/login/oauth', async (req, res) => {
  try {
    const body = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code: req.query.code,
    };
    await axios
      .post('https://github.com/login/oauth/access_token', body, {
        headers: { accept: 'application/json' },
      })
      .then((respns) => {
        if (respns.data && respns.data.access_token) {
          response.token = respns.data.access_token;
          response.success = true;
        } else {
          response.success = false;
          response.message = 'Error in authorization';
          response.token = '';
        }
      });
    res.cookie('githubToken', response.token);
    res.redirect('https://magenta-tiger-blog-app.vercel.app/');
  } catch (e) {
    res.send(e);
  }
});

// Github OAuth logout
routes.get('/logout', (req, res) => {
  res.clearCookie('githubToken');
  res.redirect('/');
});

// Create Post
routes.post(
  '/create',
  upload.single('postImage'),
  (req: Request, res: Response) => new PostC().createPost(req, res),
);

// Delete Post
routes.delete('/post/:id', (req: Request, res: Response) => new PostC().deletePost(req, res));

// Update Post
routes.put('/post/:id', (req: Request, res: Response) => new PostC().updatePost(req, res));

// Get all Posts
routes.get('/posts', (req: Request, res: Response) => new PostC().getAllPosts(req, res));

// Get Post by Id
routes.get('/post/:id', (req: Request, res: Response) => new PostC().getPostById(req, res));
