export interface Post {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: Date;
  topic: "tech" | "tips" | "design" | "best practice" | "languages" | "news";
  keywords: string[];
  isBookmarked: boolean;
  likes: number;
}
