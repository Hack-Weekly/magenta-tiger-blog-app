export type PostPreviewProps = {
  variant?: "compact" | "black";
  postImage?: string | null;
  authorName?: string;
  date?: string;
  postTitle?: string;
  postKeywords?: string[];
  postId?: string;
  topic?: "tech" | "tips" | "design" | "best practice" | "languages" | "news";
};
