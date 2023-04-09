export type PostPreviewProps = {
  variant?: "big" | "compact" | "black";
  postImage?: string | null;
  authorName?: string;
  authorPhoto?: string | null;
  date?: string;
  postTitle?: string;
  postKeywords?: string[];
  postId?: string;
};
