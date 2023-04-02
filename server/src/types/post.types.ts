export interface IPost {
  title: string;
  description: string;
  author: string;
  date: Date;
  topic: string; // TODO Optimize
  keywords: string[];
  isBookmarked: boolean;
  likes: number;
}
