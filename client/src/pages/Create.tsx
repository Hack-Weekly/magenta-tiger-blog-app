import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { TagsInput } from "react-tag-input-component";
import styled from "styled-components";
import { Button, Input } from "../components/index";

const PostWrapper = styled.div`
  display: grid;
  gap: 1rem;
  border: 1px solid black;
  padding: 1rem 2rem;
  input {
    &:focus {
      outline: none;
    }
    width: 100%;
  }
`;

const PostWrapperHeader = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;

  @media (min-width: 680px) {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledSelector = styled.select`
  float: right;
  font-size: 1.1rem;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

const TextInput = styled(Input)`
  height: 2.5rem;
  padding: 0.5rem;
  overflow: auto;
  word-break: break-word;
`;

const Description = styled(Input)`
  height: 50vh;
  padding: 0.5rem;
  overflow: auto;
  word-break: break-word;
`;

const ImageLabel = styled.label`
  font-family: "Inter";
  padding: 0.6rem 2rem;
  font-weight: 500;
  transition: 0.1s;
  border: 0.15rem solid #000000;
  color: #000000;
  box-shadow: 3px 4px 0px 0px rgba(0, 0, 0, 1);
  cursor: pointer;
  background: white;
  &:hover,
  &:focus {
    background-color: transparent;
    color: #333333;
  }
  &:active {
    background-color: transparent;
    transform: translateY(2px);
    box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 1);
  }
`;

const ImageInput = styled(Input)`
  display: none;
`;

const CreateWrapper = styled.div`
  margin-top: 4rem;
  width: 80%;
  margin: 6rem auto 0 auto;
`;

const CreateHeader = styled.h1`
  margin-bottom: 1rem;
`;

const ButtonsWrapper = styled.div`
  margin-top: 1rem;
  button {
    margin-right: 1rem;
  }
`;

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [topic, setTopic] = useState<string>("tech");

  const navigate = useNavigate();

  const fileUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  }

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const post = {
      title,
      description,
      author,
      postImage: selectedFile,
      keywords: selectedKeywords,
      topic,
    };

    const apiUrl = import.meta.env.VITE_API_URL;
    const createPostUrl = `${apiUrl}create`;

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      await axios.post(createPostUrl, post, config);
    } catch (error) {
      console.log(error);
    }

    // Reset fields
    setTitle("");
    setDescription("");
    setSelectedFile(null);
    setSelectedKeywords([]);
    setTopic("tech");

    navigate("/");
  };

  return (
    <CreateWrapper>
      <CreateHeader>Create a New Post</CreateHeader>
      <PostWrapper>
        <PostWrapperHeader>
          <ImageLabel> 
            Select an image
            <ImageInput 
              type="file"
              accept="image/png, image/jpeg"
              onChange={fileUploadChange}
            />
          </ImageLabel>
          <StyledSelector
            value={topic}
            onChange={e => setTopic(e.target.value)}
          >
            {/* Add array of Post[keywords] type and loop trough it */}
            <option value="tech">tech</option>
            <option value="tips">tips</option>
            <option value="design">design</option>
            <option value="best practice">best practice</option>
            <option value="languages">languages</option>
            <option value="news">news</option>
          </StyledSelector>
        </PostWrapperHeader>
        {selectedFile && <span>{selectedFile.name}</span>}
        <TagsInput
          value={selectedKeywords}
          onChange={setSelectedKeywords}
          name="keywords"
          placeHolder="Enter keywords"
        />
        <TextInput
          placeholder="Blog name"
          type="text"
          weight="bold"
          width="100%"
          size="md1"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextInput
          placeholder="Author"
          type="text"
          width="100%"
          size="md1"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <Description
          placeholder="Write your post here..."
          textArea
          width="100%"
          size="md1"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </PostWrapper>
      <ButtonsWrapper>
        <Button label="Post" onClick={handleSubmit} />
      </ButtonsWrapper>
    </CreateWrapper>
  );
};

export default Create;