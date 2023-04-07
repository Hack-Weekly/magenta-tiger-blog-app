import { Post } from "@/types/src/posts/post.types";
import axios from "axios";
import { useEffect, useState } from "react";

const PostDetail = () => {
  const [post, setPost] = useState<Post[]>([]);

  const url =
    "https://magenta-tiger-blog-app.onrender.com/post/64302ad9a7931a6890840fa5";

  useEffect(() => {
    getPostById();
  }, []);

  const getPostById = async () => {
    try {
      const response = await axios.get(url);
      setPost([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      Single post page
      <div>
        {post.length > 0 ? (
          <>
            {post.map(post => {
              return (
                <>
                  <p>{post.title}</p>
                  <p>{post.description}</p>
                </>
              );
            })}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default PostDetail;
