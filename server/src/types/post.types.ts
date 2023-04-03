import { Request, Response } from 'express';

export interface IPost extends Document {
  id: string;
  title: string;
  description: string;
  author: string;
  date: Date;
  topic: string; // TODO Optimize
  keywords: string[];
  isBookmarked: boolean;
  likes: number;
}

export interface PostController {
  createPost(req: Request, res: Response): Promise<Response>;
}