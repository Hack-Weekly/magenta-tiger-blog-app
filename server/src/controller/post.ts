import { Request, Response } from 'express';
import { Post } from '../models/post.model';
import { PostController } from '../types/post.types';

export class PostC implements PostController {
  // Create Post
  // eslint-disable-next-line class-methods-use-this
  async createPost(req: Request, res: Response): Promise<Response> {
    try {
      const {
        title,
        description,
        author,
        topic,
        keywords,
        isBookmarked,
        likes,
      } = req.body;

      const post = new Post({
        title,
        description,
        author,
        date: new Date(),
        topic,
        keywords,
        isBookmarked,
        likes,
      });

      await post.save();

      return res
        .status(200)
        .json({ message: 'Post created successfully', post });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ message: 'Failed to create new post', error });
    }
  }
}
