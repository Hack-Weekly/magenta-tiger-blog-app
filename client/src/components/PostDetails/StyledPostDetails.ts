import styled from "styled-components";

export const StyledImage = styled.img`
  max-width: 100%;
`;

export const StyledContent = styled.section`
  position: relative;
  display: grid;
  gap: 0.8rem;
  padding: 0.5rem 1rem 1rem 1rem;
  font-family: "Inter";
`;

export const StyledKeywordsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StyledKeywords = styled.p`
  color: grey;
`;

export const StyledTopic = styled.p`
  font-family: "Inter";
  color: #2c2c2c;
  position: relative;
  z-index: 5;
  max-width: max-content;
  margin: 1rem 0 0.2rem 0;
  font-weight: 700;
  &:first-letter {
    text-transform: capitalize;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    border-bottom: 0.5rem solid #cbf8cf;
  }
`;

export const StyledDate = styled.p`
  color: grey;
  font-size: 14px;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 1rem;
`;
