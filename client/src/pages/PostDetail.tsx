import { Button } from "@/components/Button";
import {
  AuthorImagePlacholder,
  AuthorImageWrapper,
  AuthorTitle,
  AuthorWrapper,
} from "@/components/StyledAuthor";
import StyledContainer from "@/components/StyledContainer";
import { Post } from "@/types/src/posts/post.types";
import { faBookmark, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: 100%;
`;

const StyledContent = styled.section`
  position: relative;
  display: grid;
  gap: 0.8rem;
  padding: 0.5rem 1rem 1rem 1rem;
  font-family: "Inter";
`;

const StyledKeywords = styled.p`
  color: grey;
`;

const StyledBookmarkContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

const StyledTopic = styled.p`
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
    border-bottom: 4px solid #cbf8cf;
  }
`;

const StyledDate = styled.p`
  color: grey;
  font-size: 14px;
`;

const StyledTitle = styled.h1`
  margin-bottom: 1rem;
`;

const PostDetail = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}post/${id}`;
  const userId = "123";
  const bookmarkUrl = `${apiUrl}bookmark/${userId}/${id}`;

  useEffect(() => {
    getPostById();
    toggleBookmark();
  }, []);

  const getPostById = async () => {
    try {
      const response = await axios.get(url);
      setPost([response.data]);
      setIsBookmarked(response.data.isBookmarked);
    } catch (error) {
      console.log(error);
    }
  };

  const postDate = new Date(post[0]?.date).toDateString().slice(4);

  const toggleBookmark = async () => {
    try {
      const response = await axios.post(bookmarkUrl);

      const { userId, postId } = response.data;

      if (!userId && !postId) {
        setIsBookmarked(false);
      } else {
        setIsBookmarked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(isBookmarked);

  return (
    <>
      <StyledContainer variant={"detail-page"}>
        <div>
          {post.length > 0 ? (
            <>
              {post.map(post => {
                return (
                  <div key={post._id}>
                    <StyledImage src={post.image && `${apiUrl}${post.image}`} />
                    <StyledContent>
                      <AuthorWrapper>
                        {
                          <AuthorImageWrapper>
                            <AuthorImagePlacholder>
                              <FontAwesomeIcon icon={faCircleUser} />
                            </AuthorImagePlacholder>
                          </AuthorImageWrapper>
                        }
                        <AuthorTitle variant="black">{post.author}</AuthorTitle>

                        <StyledBookmarkContainer>
                          {isBookmarked ? (
                            <Button
                              variant="secondary"
                              icon={faBookmark}
                              onClick={toggleBookmark}
                            />
                          ) : (
                            <Button
                              variant="icon"
                              transparent
                              icon={faBookmark}
                              onClick={toggleBookmark}
                            />
                          )}
                        </StyledBookmarkContainer>
                      </AuthorWrapper>

                      <div>
                        {post.keywords.map(keyword => (
                          <StyledKeywords
                            key={keyword}
                          >{`#${keyword}`}</StyledKeywords>
                        ))}
                      </div>

                      <div>
                        <StyledTopic>{post.topic}</StyledTopic>
                        <StyledDate>{postDate}</StyledDate>
                        <StyledTitle>{post.title}</StyledTitle>
                        <p>{post.description}</p>
                      </div>
                    </StyledContent>
                  </div>
                );
              })}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </StyledContainer>
    </>
  );
};

export default PostDetail;
