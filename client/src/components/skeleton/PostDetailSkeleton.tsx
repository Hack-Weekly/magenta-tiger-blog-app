import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

const PostDetailSkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: none;
  gap: 1.5rem;
  padding: 0 1rem;
  div {
    background-color: #c4c4c4ab;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    opacity: 0.4;
    background: linear-gradient(
      to right,
      transparent 0%,
      #f8f8f8 50%,
      transparent 100%
    );
    animation: ${shimmer} 1.5s infinite;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 15rem;
  @media (min-width: 680px) {
    height: 20rem;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 3rem;
  max-width: 90%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent !important;
`;

const Row = styled.div`
  width: 100%;
  height: 1rem;
  max-width: 80%;
  margin-top: 0.5rem;
`;

const PostDetailSkeleton = () => {
  const rows = Array.from({ length: 15 });
  return (
    <PostDetailSkeletonWrapper>
      <Image />
      <Header />
      <ContentWrapper>
        {rows.map((_, count) => (
          <Row key={count} />
        ))}
      </ContentWrapper>
    </PostDetailSkeletonWrapper>
  );
};

export { PostDetailSkeleton };
