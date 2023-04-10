import styled from "styled-components";

const CompactSkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: none;
  gap: 1rem;
  div {
    background-color: #c4c4c4ab;
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
