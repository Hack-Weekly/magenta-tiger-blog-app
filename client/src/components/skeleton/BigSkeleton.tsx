import styled from "styled-components";

const BigSkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: none;
  gap: 1.5rem;
  div {
    background-color: #c4c4c4ab;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 15rem;
  @media (min-width: 680px) {
    height: 20rem;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  background-color: transparent !important;
`;

const Row = styled.div`
  width: 100%;
  height: 1.3rem;
  &:first-child {
    max-width: 50%;
  }
`;

const BigSkeleton = () => {
  const rows = Array.from({ length: 3 });
  return (
    <BigSkeletonWrapper>
      <Image />
      <ContentWrapper>
        {rows.map((_, count) => (
          <Row key={count} />
        ))}
      </ContentWrapper>
    </BigSkeletonWrapper>
  );
};

export { BigSkeleton };
