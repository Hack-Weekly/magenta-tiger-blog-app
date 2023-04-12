import { StyledTopic } from "@/pages/PostDetail";
import { PostPreviewProps } from "@/types/src/styled-components/postPreview.types";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import {
  AuthorImage,
  AuthorImagePlacholder,
  AuthorImageWrapper,
  AuthorTitle,
  AuthorWrapper,
} from "./StyledAuthor";

const PostPreviewMainWrapper = styled.div`
  width: 100%;
  a {
    text-decoration: none;
  }
`;

const PostPreviewWrapper = styled.div<PostPreviewProps>`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.7rem;
  transition: 0.2s;
  z-index: 3;
  ${({ variant }) =>
    variant === "big"
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `}
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

const PreviewImageWrapper = styled.div<PostPreviewProps>`
  height: 100%;
  border: 0.15rem solid black;
  box-shadow: 4px 5px 0px 0px rgba(0, 0, 0, 1);
  ${({ variant }) =>
    variant === "big"
      ? css`
          width: 100%;
          height: 15rem;
          max-width: 100%;
          box-shadow: none;
          @media (min-width: 680px) {
            height: 20rem;
          }
        `
      : css`
          width: 7rem;
          min-width: 7rem;
          height: 7rem;
        `}

  ${({ postImage }) =>
    !postImage &&
    css`
      display: none;
    `}
`;
const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  color: #9e9e9e;
  font-family: "Roboto";
  text-align: center;
  font-size: 0.8rem;
`;
const PreviewContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  gap: 0.4rem;
`;
const ContentHeaderWrapper = styled.div<PostPreviewProps>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  span {
    color: #c1c1c1;
  }
  ${({ variant }) =>
    variant === "big" &&
    css`
      margin-top: 0.5rem;
      margin-bottom: 0.3rem;
      gap: 1rem;
    `}
`;

const PostDate = styled.p<PostPreviewProps>`
  color: #9e9e9e;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1rem;
  letter-spacing: -0.025em;
`;
const ContentBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
  p {
    margin: 0;
    padding: 0;
  }
`;
const PostTitle = styled.h2<PostPreviewProps>`
  font-family: "Inter";
  color: #252525;
  font-style: normal;
  ${({ variant }) =>
    variant === "big"
      ? css`
          font-weight: 800;
          font-size: 1.4rem;
          line-height: 1.6rem;
          letter-spacing: -0.035em;
          text-decoration-line: underline;
        `
      : css`
          font-weight: 700;
          font-size: 1.1rem;
          line-height: 18px;
          letter-spacing: -0.025em;
        `}
`;

const PostKeywordsWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3rem;
  margin-top: 0.5rem;
`;
const PostKeyword = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 14px;
  letter-spacing: -0.015em;
  color: #c1c1c1;
`;

const PostPreview = ({
  variant = "compact",
  postImage,
  authorName,
  authorPhoto,
  date,
  postTitle,
  postKeywords,
  postId,
  topic,
}: PostPreviewProps) => {
  const postDate = date && new Date(date).toDateString().slice(4);

  const handleOpenPost = () => {
    window.scrollTo({ top: 0 });
  };

  const handleBrokenImage = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) =>
    ((event.target as HTMLImageElement).src = "https://tinyurl.com/4wb82fnd");

  return (
    <PostPreviewMainWrapper>
      <Link to={`/post/${postId}`} onClick={handleOpenPost}>
        <PostPreviewWrapper variant={variant}>
          <PreviewImageWrapper variant={variant} postImage={postImage}>
            {postImage && (
              <PostImage
                src={postImage}
                alt="Picture of post"
                onError={handleBrokenImage}
              />
            )}
          </PreviewImageWrapper>
          <PreviewContentWrapper>
            <ContentHeaderWrapper variant={variant}>
              <AuthorWrapper>
                {variant === "big" && (
                  <AuthorImageWrapper>
                    {authorPhoto ? (
                      <AuthorImage src={authorPhoto} onError={handleBrokenImage} alt="Picture of author" />
                    ) : (
                      <AuthorImagePlacholder>
                        <FontAwesomeIcon icon={faCircleUser} />
                      </AuthorImagePlacholder>
                    )}
                  </AuthorImageWrapper>
                )}
                <AuthorTitle variant={variant}>{authorName}</AuthorTitle>
              </AuthorWrapper>
              {variant === "compact" && date && <span>•</span>}
              <PostDate variant={variant}>{postDate}</PostDate>
            </ContentHeaderWrapper>
            <ContentBodyWrapper>
              <PostTitle variant={variant}>{postTitle}</PostTitle>
              <PostKeywordsWrapper>
                {postKeywords &&
                  postKeywords.map(keywords => (
                    <PostKeyword key={keywords}>{`#${keywords}`}</PostKeyword>
                  ))}
              </PostKeywordsWrapper>
              <StyledTopic>{topic}</StyledTopic>
            </ContentBodyWrapper>
          </PreviewContentWrapper>
        </PostPreviewWrapper>
      </Link>
    </PostPreviewMainWrapper>
  );
};

export { PostPreview };
