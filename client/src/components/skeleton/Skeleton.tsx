import styled, { css } from "styled-components";
import { Skeleton } from "@/types/src/styled-components/skeleton.types";
import { CompactSkeleton } from "./CompactSkeleton";
import { PostDetailSkeleton } from "./PostDetailSkeleton";

const MainSkeletonWrapper = styled.div<Skeleton>`
  padding: 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  div {
    border: none;
    border-radius: 0.2rem;
    position: relative;
    overflow: hidden;
  }
`;

const SkeletonLoader = ({ variant = "home-all" }: Skeleton) => {
  const skeletons = Array.from({ length: 10 });
  return (
    <MainSkeletonWrapper variant={variant}>
      {variant === "home-all" ? (
        <>
          {skeletons.map((_, count) => (
            <CompactSkeleton key={count} />
          ))}
        </>
      ) : (
        <PostDetailSkeleton />
      )}
    </MainSkeletonWrapper>
  );
};

export { SkeletonLoader };
