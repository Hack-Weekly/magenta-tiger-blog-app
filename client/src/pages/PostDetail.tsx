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

const PostDetail = () => {
  const [post, setPost] = useState<Post[]>([]);
  const { id } = useParams();
  // const apiUrl = process.env.API_URL;
  const options = { year: "numeric", month: "short", day: "numeric" };

  const url = `https://magenta-tiger-blog-app.onrender.com/post/${id}`;

  useEffect(() => {
    getPostById();
  }, []);

  const getPostById = async () => {
    try {
      const response = await axios.get(url);
      setPost([response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledContainer variant={"mobile-page"}>
        <div>
          {post.length > 0 ? (
            <>
              {post.map(post => {
                return (
                  <div key={post._id}>
                    <StyledImage
                      src={`https://magenta-tiger-blog-app.onrender.com/${post.image}`}
                    />

                    <AuthorWrapper>
                      {
                        <AuthorImageWrapper>
                          <AuthorImagePlacholder>
                            <FontAwesomeIcon icon={faCircleUser} />
                          </AuthorImagePlacholder>
                        </AuthorImageWrapper>
                      }
                      <AuthorTitle variant="black">{post.author}</AuthorTitle>
                    </AuthorWrapper>

                    <div>
                      {post.keywords.map(keyword => (
                        <p key={keyword}>{`#${keyword}`}</p>
                      ))}
                    </div>

                    {post.isBookmarked ? (
                      <Button variant="secondary" icon={faBookmark} />
                    ) : (
                      <Button variant="icon" transparent icon={faBookmark} />
                    )}

                    <h1>{post.title}</h1>
                    <p>{post.description}</p>
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
