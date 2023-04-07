import { Post } from "@/types/src/posts/post.types";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const [post, setPost] = useState<Post[]>([]);
  const url =
    "https://magenta-tiger-blog-app.onrender.com/post/642d7bdcce6c73f2ac417fda";

  useEffect(() => {
    getPostById();
  }, []);

  const getPostById = async () => {
    try {
      const response = await axios.get(url);
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(post);

  return (
    <>
      Single post page
      <div>{post.length > 0 && <p>Hallo</p>}</div>
    </>
  );
};

export default PostDetail;
