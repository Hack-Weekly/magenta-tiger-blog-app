import { PostPreview } from "@/components/PostPreview";
import { Post } from "@/types/src/posts/post.types";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { SkeletonLoader } from "../skeleton/Skeleton";
import { LoadingState } from "@/types/src/styled-components/loading.types";
import { FailedMessage } from "../FailedMessage";
import { FilterContext, FilterContextValue } from "@/context/filterContext";

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
  gap: 1rem;
  @media (min-width: 680px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;

    & > * {
      max-width: calc(50% - 0.5rem);
    }
  }
`;

const SubTitle = styled.h2`
  font-family: "Inter";
  font-weight: 700;
  font-size: 1.2rem;
  color: #494949;
  margin-top: 1rem;
  text-align: center;
`;

const PostsSection = () => {
  const [postFilter, setPostFilter] = useState("Latest");
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.fetching
  );

  const {
    selectedTopic,
    changeSelectedTopic,
    selectedKeyword,
    changeSelectedKeyword,
  } = useContext(FilterContext) as FilterContextValue;

  const apiUrl = import.meta.env.VITE_API_URL;

  const changeFilter = (filter: "Latest" | "All") => {
    setPostFilter(filter);
  };

  const handleTopicKeywordReset = () => {
    changeSelectedKeyword(null);
    changeSelectedTopic(null);
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

  useEffect(() => {
    let filtered = posts;
    if (selectedTopic || selectedKeyword) {
      filtered = (posts || []).filter(post => {
        if (selectedTopic && post.topic !== selectedTopic) {
          return false;
        }
        if (selectedKeyword && !post.keywords.includes(selectedKeyword)) {
          return false;
        }
        return true;
      });
    }
    setFilteredPosts(filtered);
    setPostFilter(selectedTopic || selectedKeyword ? "All" : "Latest");
  }, [posts, selectedTopic, selectedKeyword]);

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
          label="All posts"
          disabled={postFilter === "All"}
          onClick={() => changeFilter("All")}
        />
      </MainContentSorting>
      {(selectedTopic || selectedKeyword) && (
        <Button
          label={
            selectedTopic
              ? "Clear Topic"
              : selectedKeyword
              ? "Clear Keyword"
              : ""
          }
          variant="danger"
          onClick={handleTopicKeywordReset}
        />
      )}
      {postFilter === "Latest" && <SubTitle>Latest 10 posts</SubTitle>}
      {loadingState === LoadingState.fetching && (
        <SkeletonLoader variant="home-all" />
      )}
      <ContentPostsWrapper>
        {loadingState === LoadingState.error && <FailedMessage />}
        {loadingState === LoadingState.success &&
        filteredPosts &&
        postFilter === "Latest" ? (
          <>
            {(filteredPosts ?? [])
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map(post => (
                <PostPreview
                  key={post._id}
                  topic={post.topic}
                  postTitle={post.title}
                  authorName={post.author}
                  postId={post._id}
                  postImage={apiUrl + post.image}
                  date={post.date}
                  postKeywords={post.keywords.map(keywords => keywords)}
                />
              ))}
            {filteredPosts?.length > 9 && (
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
          postFilter === "All" &&
          (filteredPosts ?? [])
            .sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            .map(post => (
              <PostPreview
                key={post._id}
                topic={post.topic}
                postTitle={post.title}
                authorName={post.author}
                postId={post._id}
                postImage={apiUrl + post.image}
                date={post.date}
                postKeywords={post.keywords.map(keywords => keywords)}
              />
            ))
        )}
      </ContentPostsWrapper>
    </MainContentWrapper>
  );
};

export { PostsSection };
