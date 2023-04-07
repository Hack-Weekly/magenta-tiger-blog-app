export type PostType = {
  _id?: string;
  title?: string;
  description?: string;
  image?: string;
  author?: string;
  date?: Date;
  topic?: string;
  keywords?: string[];
  isBookmarked?: boolean;
  likes?: number;
};
