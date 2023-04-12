export interface Post {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  topic: "tech" | "tips" | "design" | "best practice" | "languages" | "news";
  keywords: string[];
  isBookmarked: boolean;
  likes: number;
}

export type PostTopic =
  | "tech"
  | "tips"
  | "design"
  | "best practice"
  | "languages"
  | "news";
