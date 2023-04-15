import { Button } from "@/components/Button";
import { FailedMessage } from "@/components/FailedMessage";
import {
  AuthorImagePlacholder,
  AuthorImageWrapper,
  AuthorTitle,
  AuthorWrapper,
} from "@/components/StyledAuthor";
import StyledContainer from "@/components/StyledContainer";
import { SkeletonLoader } from "@/components/skeleton/Skeleton";
import { Post } from "@/types/src/posts/post.types";
import { LoadingState } from "@/types/src/styled-components/loading.types";
import { faBookmark, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  StyledBookmarkContainer,
  StyledContent,
  StyledDate,
  StyledImage,
  StyledKeywords,
  StyledKeywordsWrapper,
  StyledTitle,
  StyledTopic,
} from "./StyledPostDetails";

const PostDetails = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.fetching
  );
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem("userId")
  );

  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}post/${id}`;

  useEffect(() => {
    getUserId();

    const savedBookmark = localStorage.getItem("isBookmarked");

    if (savedBookmark) {
      setIsBookmarked(true);
    }

    getPostById().then(() => {
      toggleBookmark();
    });
  }, []);

  async function getUserId() {
    try {
      const response = await axios.get(`${apiUrl}user`, {
        withCredentials: true,
      });
      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      setUserId(userId);

      console.log(userId);
    } catch (error) {
      console.log(error);
    }
  }

  const getPostById = async () => {
    try {
      const response = await axios.get(url);
      setPost([response.data]);
      setIsBookmarked(response.data.isBookmarked);
      setLoadingState(LoadingState.success);
    } catch (error) {
      console.log(error);
      setLoadingState(LoadingState.error);
    }
  };

  const postDate = new Date(post[0]?.date).toDateString().slice(4);

  const toggleBookmark = async () => {
    const bookmarkUrl = `${apiUrl}bookmark/${userId}/${id}`;

    try {
      const response = await axios.post(bookmarkUrl);

      const { userId, postId } = response.data;

      if (!userId && !postId) {
        setIsBookmarked(false);
        localStorage.removeItem("isBookmarked");
      }

      if (userId && postId) {
        setIsBookmarked(true);
        localStorage.setItem("userId", userId);
        localStorage.setItem("isBookmarked", "true");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledContainer variant={"detail-page"}>
        <>
          {post.length > 0 && loadingState === LoadingState.success ? (
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

                      <StyledKeywordsWrapper>
                        {post.keywords.map(keyword => (
                          <StyledKeywords
                            key={keyword}
                          >{`#${keyword}`}</StyledKeywords>
                        ))}
                      </StyledKeywordsWrapper>

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
          ) : loadingState === LoadingState.fetching ? (
            <SkeletonLoader variant="postDetail" />
          ) : (
            loadingState === LoadingState.error && <FailedMessage />
          )}
        </>
      </StyledContainer>
    </>
  );
};

export default PostDetails;
