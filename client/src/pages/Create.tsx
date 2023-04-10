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

const CustomBtn = styled(Button)`
  background: transparent;
  &:hover,
  &:focus {
    background-color: transparent;
  }
  &:active {
    background-color: transparent;
  }
`;

const FileName = styled.span`
  margin-left: 1rem;
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.style.display = "none";

    input.addEventListener("change", () => {
      const file = input.files && input.files[0];
      {
        console.log(file);
      }
      if (!file) {
        return;
      }
      console.log(file);
      setSelectedFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const post = {
      title,
      description,
      postImage: selectedFile,
      keywords: selectedKeywords,
      topic,
    };

    const apiUrl = import.meta.env.VITE_API_URL;
    const createPostUrl = `${apiUrl}create`;
    // const createPostUrl = `http://localhost:8089/create`;

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    try {
      const response = await axios.post(createPostUrl, post, config);

      console.log(response.data);
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
        <div>
          <CustomBtn
            label="Add a cover image"
            variant="primary"
            onClick={handleClick}
          />
          {selectedFile && <FileName>{selectedFile.name}</FileName>}
          <StyledSelector
            value={topic}
            onChange={e => setTopic(e.target.value)}
          >
            <option value="tech">tech</option>
            <option value="tips">tips</option>
            <option value="design">design</option>
            <option value="best practice">best practice</option>
            <option value="languages">languages</option>
            <option value="news">news</option>
          </StyledSelector>
        </div>
        <TagsInput
          value={selectedKeywords}
          onChange={setSelectedKeywords}
          name="tags"
          placeHolder="Enter tags"
        />
        <TextInput
          placeholder="Blog name"
          weight="bold"
          width="100%"
          size="md1"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <TextInput
          placeholder="Author"
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
