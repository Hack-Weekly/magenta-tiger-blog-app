export interface Post {
  _id?: string;
  title: string;
  description: string;
  image: string;
  author: string;
  topic: PostTopic;
  keywords: string[];
  likes?: number;
}

export type PostTopic =
  | "tech"
  | "tips"
  | "design"
  | "best practice"
  | "languages"
  | "news";
