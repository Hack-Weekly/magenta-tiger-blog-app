import { PostPreviewProps } from "@/types/src/styled-components/postPreview.types";
import styled, { css } from "styled-components";

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;
  flex-wrap: wrap;
`;
export const AuthorImageWrapper = styled.div`
  background-color: #dfdfdf;
  width: 2.5rem;
  height: 2.5rem;
  min-height: 2rem;
  min-width: 2rem;
  border-radius: 50%;
`;
export const AuthorImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;
export const AuthorImagePlacholder = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.3rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8d8d8d;
`;
export const AuthorTitle = styled.p<PostPreviewProps>`
  font-family: "Roboto";
  text-decoration: none;
  color: #2c2c2c;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 0.9rem;
  letter-spacing: -0.025em;

  ${({ variant }) =>
    variant === "black" &&
    css`
      color: #202020;
      font-weight: 700;
    `}
`;
