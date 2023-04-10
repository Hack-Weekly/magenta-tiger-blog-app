import { PostPreview } from "@/components/PostPreview";
import { Post } from "@/types/src/posts/post.types";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { SkeletonLoader } from "../skeleton/Skeleton";
import { LoadingState } from "@/types/src/styled-components/loading.types";
import { FailedMessage } from "../FailedMessage";

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
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.fetching
  );

  const apiUrl = import.meta.env.VITE_API_URL;

  const changeFilter = (filter: "Latest" | "All") => {
    setPostFilter(filter);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${apiUrl}posts`);
        setPosts(response.data);
        setLoadingState(LoadingState.success);
      } catch (err) {
        setLoadingState(LoadingState.error);
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
        {loadingState === LoadingState.fetching && (
          <SkeletonLoader
            variant={postFilter === "All" ? "home-all" : "home-recent"}
          />
        )}
        {loadingState === LoadingState.error && <FailedMessage />}
        {loadingState === LoadingState.success &&
        posts &&
        postFilter === "Latest" ? (
          <>
            <PostPreview
              key={posts[0]._id}
              postTitle={posts[0].title}
              authorName={posts[0].author}
              postId={posts[0]._id}
              postImage={apiUrl + posts[0].image}
              variant="big"
              date={posts[0].date}
              postKeywords={posts[0].keywords.map(keywords => keywords)}
            />
            {posts.slice(1, 10).map(post => (
              <PostPreview
                key={post._id}
                postTitle={post.title}
                authorName={post.author}
                postId={post._id}
                postImage={apiUrl + post.image}
                date={post.date}
                postKeywords={post.keywords.map(keywords => keywords)}
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
          loadingState === LoadingState.success &&
          posts &&
          postFilter === "All" && (
            <>
              {posts.map(post => (
                <PostPreview
                  key={post._id}
                  postTitle={post.title}
                  authorName={post.author}
                  postId={post._id}
                  postImage={apiUrl + post.image}
                  date={post.date}
                  postKeywords={post.keywords.map(keywords => keywords)}
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
