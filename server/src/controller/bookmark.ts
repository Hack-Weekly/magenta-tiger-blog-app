/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { Bookmark } from '../models/bookmark.model';

export class BookmarkController {
  async toggleBookmark(req: Request, res: Response): Promise<Response> {
    try {
      const { userId, postId } = req.params;

      const isBookmarked = await Bookmark.findOne({ userId, postId });

      if (isBookmarked) {
        await Bookmark.findOneAndDelete({ userId, postId });
        return res.status(200).json({ message: 'Bookmark removed' });
      }

      const bookmark = new Bookmark({
        userId,
        postId,
      });

      await bookmark.save();

      return res.status(200).json(bookmark);
    } catch (error) {
      return res.status(400).json({ message: 'Something went wrong', error });
    }
  }
}
