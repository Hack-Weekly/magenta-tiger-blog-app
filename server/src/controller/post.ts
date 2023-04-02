import { Request, Response } from 'express';
import { Post } from '../models/post.model';
import { PostController } from '../types/post.types';

export class PostC implements PostController {
  // Create Post
  // eslint-disable-next-line class-methods-use-this
  async createPost(req: Request, res: Response): Promise<Response> {
    try {
      const postData = req.body;

      const post = new Post({
        title: postData.title,
        description: postData.description,
        author: postData.author,
        date: new Date(),
        topic: postData.topic,
        keywords: postData.keywords,
        isBookmarked: postData.isBookmarked,
        likes: postData.likes,
      });

      await post.save(); // Save the post to the database

      return res
        .status(200)
        .json({ message: 'Post created successfully', post });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: 'Failed to create new post' });
    }
  }
}
