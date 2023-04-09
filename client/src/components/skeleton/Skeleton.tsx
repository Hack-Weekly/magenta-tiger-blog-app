import styled, { keyframes } from "styled-components";
import { Skeleton } from "@/types/src/styled-components/skeleton.types";
import { BigSkeleton } from "./BigSkeleton";
import { CompactSkeleton } from "./CompactSkeleton";
import { PostDetailSkeleton } from "./PostDetailSkeleton";

const shimmer = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
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
    overflow: hidden;
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
