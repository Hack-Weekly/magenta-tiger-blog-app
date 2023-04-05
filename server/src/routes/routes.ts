import { Request, Response, Router } from 'express';
import multer from 'multer';
import { PostC } from '../controller/post';

export const routes = Router();

const storage = multer.diskStorage({
  destination(
    req: Request,
    file: Express.Multer.File,
    // Add type for callback
    cb,
  ) {
    cb(null, './uploads/');
  },
  filename(
    req: Request,
    file: Express.Multer.File,
    // Add type for callback
    cb,
  ) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  // Add type for callback
  cb,
) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(
      new Error(
        'Failed to upload image. Only jpeg or png are allowed. Please try again.',
      ),
      false,
    );
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter,
});

// Server health check
routes.get('/health', (req: Request, res: Response) => res.send({
  message: 'Magenta Tiger Blog App is up and running',
  code: 200,
}));

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
