import { Schema, model } from 'mongoose';
import { IBookmark } from '../types/bookmark.types';

export const BookmarkSchema = new Schema<IBookmark>({
  userId: {
    type: String,
    required: [true, 'Please provide a user id'],
  },
  postId: {
    type: String,
    required: [true, 'Please provide a post id'],
  },
});

export const Bookmark = model<IBookmark>('Bookmark', BookmarkSchema);
