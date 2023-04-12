import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { TagsInput } from "react-tag-input-component";

import { Button } from "../Button";
import { Input } from "../Input";
import {
  ButtonsWrapper,
  CreateHeader,
  CreateWrapper,
  ErrorMessage,
  ImageInput,
  ImageLabel,
  PostWrapper,
  PostWrapperHeader,
  StyledSelector,
} from "./StyledCreatePost";

const CreatePost = () => {
  const topics = [
    "tech",
    "tips",
    "design",
    "best practice",
    "languages",
    "news",
  ];

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [topic, setTopic] = useState<string>(topics[0]);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const navigate = useNavigate();

  const fileUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!title || !description || !author) {
      setErrorMessage(true);
      return;
    }

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
            {topics.map(topic => (
              <option value={topic} key={topic}>
                {topic}
              </option>
            ))}
          </StyledSelector>
        </PostWrapperHeader>
        {selectedFile && <p>{selectedFile.name}</p>}
        <TagsInput
          value={selectedKeywords}
          classNames={{ input: "custom-tag-input" }}
          onChange={setSelectedKeywords}
          name="keywords"
          placeHolder="Enter keywords"
        />
        <Input
          placeholder="Blog name"
          type="text"
          weight="bold"
          width="100%"
          size="md1"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Input
          placeholder="Author"
          type="text"
          width="100%"
          size="md1"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <Input
          placeholder="Write your post here..."
          textArea
          width="100%"
          size="md1"
          height="50vh"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        {errorMessage && (
          <ErrorMessage>
            The title, author or/and the description have not been provided
          </ErrorMessage>
        )}
      </PostWrapper>
      <ButtonsWrapper>
        <Button label="Post" onClick={handleSubmit} />
      </ButtonsWrapper>
    </CreateWrapper>
  );
};

export default CreatePost;
