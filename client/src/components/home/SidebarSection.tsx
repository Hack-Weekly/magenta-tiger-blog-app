import { FilterContext, FilterContextValue } from "@/context/filterContext";
import { PostTopic } from "@/types/src/posts/post.types";
import { useContext } from "react";
import styled from "styled-components";
import { Button } from "..";

const SideBarWrapper = styled.aside`
  position: sticky;
  display: none;
  @media (min-width: 680px) {
    display: block;
    margin-right: 2rem;
  }
  top: 6rem;
  margin-top: 1rem;
  background-color: #d3d3d3;
  border: 0.2rem solid #c5c5c5;
  border-radius: 0.3rem;
  height: 22rem;
  min-width: 12rem;
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

const SidebarSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const SectionTitle = styled.h3`
  font-family: "Roboto";
  text-align: center;
  width: 100%;
  color: #424242;
  margin-bottom: 1rem;
`;

const Sidebar = () => {
  const topics: PostTopic[] = [
    "tech",
    "tips",
    "design",
    "best practice",
    "languages",
    "news",
  ];

  const { selectedTopic, changeSelectedTopic } = useContext(
    FilterContext
  ) as FilterContextValue;

  return (
    <SideBarWrapper>
      <SidebarContentWrapper>
        <SidebarSectionWrapper>
          <SectionTitle>Topics</SectionTitle>
          {topics.map(topic => (
            <Button
              label={topic}
              variant="secondary"
              key={topic}
              disabled={selectedTopic === topic}
              onClick={() => changeSelectedTopic(topic)}
            />
          ))}
        </SidebarSectionWrapper>
      </SidebarContentWrapper>
    </SideBarWrapper>
  );
};

export { Sidebar };
