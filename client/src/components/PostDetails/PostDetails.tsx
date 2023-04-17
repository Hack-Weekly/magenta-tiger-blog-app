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
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BookmarkButton from "../BookmarkButton/BookmarkButton";
import {
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
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.fetching
  );
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem("userId")
  );

  const { id: postId } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}post/${postId}`;

  useEffect(() => {
    getUserId();
    getPostById();
  }, []);

  async function getUserId() {
    try {
      const response = await axios.get(`${apiUrl}user`, {
        withCredentials: true,
      });
      const userId = response.data.userId;
      localStorage.setItem("userId", userId);
      setUserId(userId);
    } catch (error) {
      console.log(error);
    }
  }

  const getPostById = async () => {
    try {
      const response = await axios.get(url);
      setPost([response.data]);
      setLoadingState(LoadingState.success);
    } catch (error) {
      console.log(error);
      setLoadingState(LoadingState.error);
    }
  };

  const postDate = new Date(post[0]?.date).toDateString().slice(4);

  return (
    <StyledContainer variant={"detail-page"}>
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

                    <BookmarkButton userId={userId} selectedPostId={postId} />
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
    </StyledContainer>
  );
};

export default PostDetails;
