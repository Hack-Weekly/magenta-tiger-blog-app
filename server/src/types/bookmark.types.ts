import { Document } from 'mongoose';

export interface IBookmark extends Document {
  userId: string;
  postId: string;
}
