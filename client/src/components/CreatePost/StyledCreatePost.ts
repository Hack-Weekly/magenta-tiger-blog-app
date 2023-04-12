import styled from "styled-components";
import { Input } from "../Input";

export const PostWrapper = styled.div`
  display: grid;
  gap: 1rem;
  border: 1px solid black;
  padding: 1rem 2rem;
  font-family: "Inter";
  input {
    &:focus {
      outline: none;
    }
    width: 100%;
  }
`;

export const PostWrapperHeader = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;

  @media (min-width: 680px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledSelector = styled.select`
  float: right;
  font-size: 1.1rem;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
`;

export const ImageLabel = styled.label`
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

export const ImageInput = styled(Input)`
  display: none;
`;

export const CreateWrapper = styled.div`
  margin-top: 4rem;
  width: 80%;
  max-width: 70rem;
  margin: 6rem auto 3rem auto;
`;

export const CreateHeader = styled.h1`
  margin-bottom: 1rem;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 1rem;
  button {
    margin-right: 1rem;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;
