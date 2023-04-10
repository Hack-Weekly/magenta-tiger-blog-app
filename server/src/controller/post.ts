/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { Post } from '../models/post.model';
import { IPost, PostController } from '../types/post.types';

export class PostC implements PostController {
  // Create Post
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
      }: IPost = req.body;

      const post = new Post({
        title,
        description,
        image: req.file?.path,
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

  async deletePost(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const post = await Post.findOneAndDelete({ _id: id });

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).send({ message: 'Post deleted successfully' });
    } catch (error) {
      return res.status(400).json({ message: 'Failed to delete post', error });
    }
  }

  async updatePost(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const { title, description, topic, keywords }: IPost = req.body;

      const post = await Post.findByIdAndUpdate(
        { _id: id },
        {
          title,
          description,
          topic,
          keywords,
        },
        { new: true }
      );

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json({ message: 'Failed to update post', error });
    }
  }

  // Get all posts
  async getAllPosts(req: Request, res: Response): Promise<Response> {
    try {
      const posts = await Post.find();

      if (!posts) {
        return res.status(404).json({ message: 'Posts not found' });
      }

      return res.status(200).json(posts);
    } catch (error) {
      return res.status(400).json({ message: 'Failed to update post', error });
    }
  }

  // Get post by id
  async getPostById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const post = await Post.findById({ _id: id });

      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }

      return res.status(200).json(post);
    } catch (error) {
      return res.status(400).json({ message: 'Failed to fetch post', error });
    }
  }
}
