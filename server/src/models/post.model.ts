import { Schema, model } from 'mongoose';
import { IPost } from '../types/post.types';

export const PostSchema = new Schema<IPost>({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  image: { type: String },
  author: {
    type: String,
  },
  date: {
    type: Date,
  },
  topic: {
    type: String, // TODO Optimize
  },
  keywords: {
    type: [String],
  },
  isBookmarked: {
    type: Boolean,
  },
  likes: { type: Number },
});

export const Post = model<IPost>('Post', PostSchema);
