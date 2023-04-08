import { PostPreview } from "@/components/PostPreview";
import { Post } from "@/types/src/posts/post.types";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

const MainContentWrapper = styled.section`
  width: 100%;
  height: 100%;
`;

const MainContentSorting = styled.div`
  width: 100%;
  padding: 0.3rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const ContentPostsWrapper = styled.div`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;

const PostsSection = () => {
  const [postFilter, setPostFilter] = useState("Latest");
  const [posts, setPosts] = useState<Post[] | null>(null);

  const changeFilter = (filter: "Latest" | "All") => {
    setPostFilter(filter);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://magenta-tiger-blog-app.onrender.com/posts"
        );
        setPosts(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <MainContentWrapper>
      <MainContentSorting>
        <Button
          variant="text"
          label="Latest"
          disabled={postFilter === "Latest"}
          onClick={() => changeFilter("Latest")}
        />
        <Button
          variant="text"
          label="All blogs"
          disabled={postFilter === "All"}
          onClick={() => changeFilter("All")}
        />
      </MainContentSorting>
      <ContentPostsWrapper>
        {posts && postFilter === "Latest" ? (
          <>
            <PostPreview
              key={posts[0]._id}
              postTitle={posts[0].title}
              authorName={posts[0].author}
              postId={posts[0]._id}
              postImage={posts[0].image}
              variant="big"
            />
            {posts.slice(1, 10).map(post => (
              <PostPreview
                key={post._id}
                postTitle={post.title}
                authorName={post.author}
                postId={post._id}
                postImage={post.image}
              />
            ))}
            {posts?.length > 9 && (
              <Button
                variant="secondary"
                label="See more .."
                onClick={() => changeFilter("All")}
              />
            )}
          </>
        ) : (
          posts &&
          postFilter === "All" && (
            <>
              {posts.map(post => (
                <PostPreview
                  key={post._id}
                  postTitle={post.title}
                  authorName={post.author}
                  postId={post._id}
                  postImage={post.image}
                />
              ))}
            </>
          )
        )}
      </ContentPostsWrapper>
    </MainContentWrapper>
  );
};

export { PostsSection };
