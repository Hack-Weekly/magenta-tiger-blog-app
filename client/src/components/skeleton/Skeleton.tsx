import styled, { keyframes } from "styled-components";
import { Skeleton } from "@/types/src/styled-components/skeleton.types";
import { BigSkeleton } from "./BigSkeleton";
import { CompactSkeleton } from "./CompactSkeleton";
import { PostDetailSkeleton } from "./PostDetailSkeleton";

const shine = keyframes`
  from {
      opacity: 0;
      transform: translateX(-100%);
    }
    to {
      opacity: 1;
      transform: translateX(100%);
    }
`;

const MainSkeletonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  div {
    border: none;
    border-radius: 4px;
    position: relative;
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(#fff, 0) 0,
        rgba(#fff, 0.2) 20%,
        rgba(#fff, 0.5) 60%,
        rgba(#fff, 0)
      );

      content: "";
    }
  }
`;

const SkeletonLoader = ({ variant = "default", hasBig = false }: Skeleton) => {
  const skeletons = Array.from({ length: 10 });
  return (
    <MainSkeletonWrapper>
      {variant === "default" ? (
        <>
          {hasBig && <BigSkeleton></BigSkeleton>}
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
