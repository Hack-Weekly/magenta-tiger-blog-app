import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
`;

const CompactSkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: none;
  gap: 1rem;
  padding: 0.5rem;
  background-color: #c4c4c4ab;
  div {
    background-color: #92929258;
  }
  @media (min-width: 680px) {
    max-width: calc(50% - 0.5rem);
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
  width: 7rem;
  min-width: 7rem;
  height: 7rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.7rem;
  background-color: transparent !important;
`;

const Row = styled.div`
  width: 100%;
  height: 1rem;
  &:first-child {
    max-width: 50%;
  }
  &:last-child {
    max-width: 40%;
  }
`;

const CompactSkeleton = () => {
  const rows = Array.from({ length: 3 });
  return (
    <CompactSkeletonWrapper>
      <Image />
      <ContentWrapper>
        {rows.map((_, count) => (
          <Row key={count} />
        ))}
      </ContentWrapper>
    </CompactSkeletonWrapper>
  );
};

export { CompactSkeleton };
