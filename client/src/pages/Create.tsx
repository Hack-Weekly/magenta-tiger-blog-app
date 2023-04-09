import Nav from "@/components/nav/Nav";
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from "../components/index";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const PostWrapper = styled.div`
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
  font-size: 1.2rem;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`

const HeaderInput = styled(Input)`
  font-weight: bold;
  font-size: 2rem;
  margin: 2rem 0;
`;

const TextInput = styled(Input)`
  height: 50vh;
  overflow: auto;
  word-break: break-word;
  margin: 2rem 0;
`

const CustomBtn = styled(Button)`
  background: transparent;
  margin-bottom: 1rem;
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
`

const CreateWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const CreateHeader = styled.h1`
  margin-bottom: 1rem;
`;

const ButtonsWrapper = styled.div`
  margin-top: 1rem;
  button {
    margin-right: 1rem;
  }
`

const Create = () => {
  const [header, setHeader] = useState<string>('');
  const [textBody, setTextBody] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]); 
  const [topic, setTopic] = useState<string>('tech'); 

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.style.display = 'none';

    input.addEventListener('change', () => {
      const file = input.files && input.files[0];
      {console.log(file)}
      if (!file) {
        return;
      }
      console.log(file)
      setSelectedFile(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const navigate = useNavigate();
    e.preventDefault();

    const post = {
      title: header,
      description: textBody,
      postImage: selectedFile, 
      keywords: selectedTags,
      topic
    };

    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    // Reset fields
    setHeader('');
    setTextBody('');
    setSelectedFile(null);
    setSelectedTags([]);
    setTopic('tech');

    navigate('/');
  }
  return (
    <>
      <Nav />
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
            <StyledSelector value={topic} onChange={(e) => setTopic(e.target.value)}>
              <option value='tech'>tech</option>
              <option value='tips'>tips</option>
              <option value='design'>design</option>
              <option value='best practice'>best practice</option>
              <option value='languages'>languages</option>
              <option value='news'>news</option>
            </StyledSelector>
          </div>
          <TagsInput
            value={selectedTags}
            onChange={setSelectedTags}
            name="tags"
            placeHolder="Enter tags"
          />
          <HeaderInput 
            placeholder="Blog name" 
            weight="bold"
            width='100%'
            size='xl3'
            value={header}
            onChange={(e) => setHeader(e.target.value)}
          />
          <TextInput 
            placeholder="Write your post here..." 
            textArea
            width='100%'
            size='md1'
            value={textBody}
            onChange={(e) => setTextBody(e.target.value)}
          />
        </PostWrapper>
        <ButtonsWrapper>
          <Button 
            label='Post'
            onClick={handleSubmit}
          />
        </ButtonsWrapper>
      </CreateWrapper>
    </>
  );
};

export default Create;
