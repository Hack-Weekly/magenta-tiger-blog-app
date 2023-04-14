import { Button } from "@/components/Button";
import { FailedMessage } from "@/components/FailedMessage";
import { SkeletonLoader } from "@/components/skeleton/Skeleton";
import {
  AuthorImagePlacholder,
  AuthorImageWrapper,
  AuthorTitle,
  AuthorWrapper,
} from "@/components/StyledAuthor";
import StyledContainer from "@/components/StyledContainer";
import { Post } from "@/types/src/posts/post.types";
import { LoadingState } from "@/types/src/styled-components/loading.types";
import { faBookmark, faCircleUser, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { 
  StyledContent, 
  StyledImage, 
  StyledBookmarkContainer, 
  StyledKeywordsWrapper, 
  StyledTitle, 
  StyledTopic, 
  StyledDate,
  StyledKeywords
} from './StyledPostDetail';

const PostDetail = () => {
  const [post, setPost] = useState<Post[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.fetching
  );

  const navigate = useNavigate();

  const { id } = useParams();
  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}post/${id}`;

  useEffect(() => {
    getPostById();
  }, []);

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


  const handleDelete = async () => {
    try {
      const response = await axios.delete(url);
      navigate("/");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const postDate = new Date(post[0]?.date).toDateString().slice(4);

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

                        {/* TODO: Implement bookmak function */}
                        <StyledBookmarkContainer>
                          {post.isBookmarked ? (
                            <Button variant="secondary" icon={faBookmark} />
                          ) : (
                            <Button
                              variant="icon"
                              transparent
                              icon={faBookmark}
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
                      <div>
                        <Button  
                          variant="danger" 
                          size="sm1" 
                          icon={faTrashCan} 
                          iconSize="1rem"
                          onClick={handleDelete}
                        />
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

export default PostDetail;
