import { Button } from "@/components/Button";
import { PostPreview } from "@/components/PostPreview";
import StyledContainer from "@/components/StyledContainer";
import { useState } from "react";
import styled from "styled-components";

const SideBarWrapper = styled.aside`
  position: sticky;
  top: 2rem;
  display: none;
  @media (min-width: 680px) {
    display: block;
    margin-right: 2rem;
  }
  position: sticky;
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
          />
          <Button
            variant="text"
            label="All blogs"
            disabled={postFilter === "All"}
          />
        </MainContentSorting>
        <ContentPostsWrapper>
          <PostPreview
            postImage={
              "https://f004.backblazeb2.com/file/swappnet-folder/istockphoto-1127638057-612x612.jpg"
            }
            variant="big"
            postTitle="Test title lol some text heh"
            date="Jun 13, 2023"
            authorName="Swappnet"
            postTopics="#Tech, #Test"
          />
          <PostPreview
            postImage={null}
            variant="compact"
            postTitle="Test title lol some text heh"
            date="Jun 13, 2023"
            authorName="Swappnet"
            postTopics="#Tech, #Test"
          />
          <PostPreview
            postImage={
              "https://f004.backblazeb2.com/file/swappnet-folder/istockphoto-1127638057-612x612.jpg"
            }
            variant="compact"
            postTitle="Test title lol some text heh"
            date="Jun 13, 2023"
            authorName="Swappnet"
            postTopics="#Tech, #Test"
          />
          <PostPreview
            postImage={
              "https://f004.backblazeb2.com/file/swappnet-folder/istockphoto-1127638057-612x612.jpg"
            }
            variant="compact"
            postTitle="Test title lol some text heh"
            date="Jun 13, 2023"
            authorName="Swappnet"
            postTopics="#Tech, #Test"
          />
        </ContentPostsWrapper>
      </MainContentWrapper>
    </StyledContainer>
  );
};

export default Home;
