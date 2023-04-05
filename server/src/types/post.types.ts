import { Request, Response } from 'express';

export interface IPost extends Document {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: Date;
  topic: 'tech' | 'tips' | 'design' | 'best practice' | 'languages' | 'news';
  keywords: string[];
  isBookmarked: boolean;
  likes: number;
}

export interface PostController {
  createPost(req: Request, res: Response): Promise<Response>;
}
