import { Button } from "@/components/Button";
import { PostPreview } from "@/components/PostPreview";
import StyledContainer from "@/components/StyledContainer";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SideBarWrapper = styled.aside`
  position: sticky;
  top: 2rem;
  display: none;
  @media (min-width: 680px) {
    display: block;
    margin-right: 2rem;
  }
  top: 1rem;
  margin-top: 1rem;
  border: 0.15rem solid #aaaaaa;
  border-radius: 0.3rem;
  max-height: 40rem;
`;

const SidebarContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
  position: relative;
`;

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

const Home = () => {
  const [postFilter, setPostFilter] = useState("Latest");
  const [posts, setPosts] = useState([]);

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  const changeFilter = (filter: "Latest" | "All") => {
    setPostFilter(filter);
    setSkip(0);
    setLimit(10);
  };

  function handleScroll() {
    if (postFilter === "All") {
      setLimit(limit + 10);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://magenta-tiger-blog-app.onrender.com/posts"
      );
      setPosts(response.data);
    }
    fetchData();
  }, []);

  return (
    <StyledContainer variant="page">
      <SideBarWrapper>
        <SidebarContentWrapper></SidebarContentWrapper>
      </SideBarWrapper>
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
          {postFilter === "Latest" ? (
            <>
              <PostPreview
                key={null}
                postTitle="Test"
                authorName="Swappnet"
                variant="big"
              />
              {posts.slice(1, 10).map(post => (
                <PostPreview
                  key={null}
                  postTitle="Test"
                  authorName="Swappnet"
                  variant="compact"
                />
              ))}
            </>
          ) : (
            <>
              {posts.map(post => (
                <PostPreview
                  key={null}
                  postTitle="Test"
                  authorName="Swappnet"
                  variant="compact"
                />
              ))}
            </>
          )}
          {postFilter === "All" && (
            <div style={{ height: "50px" }} onScroll={handleScroll}>
              Scroll down for more posts...
            </div>
          )}
        </ContentPostsWrapper>
      </MainContentWrapper>
    </StyledContainer>
  );
};

export default Home;
