import { Button } from "../Button";
import styled from "styled-components";

const StyledMainContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 100%;
`;

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1rem;
  box-shadow: 0px 0px 4px grey;
  border-radius: 10px;
  gap: 1rem;

  @media (min-width: 680px) {
    border: 1px solid grey;
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 35rem;
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

const StyledTextDiv = styled.div`
  text-align: center;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);

  &:before,
  &:after {
    content: "";
    flex-grow: 1;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    width: 6rem;
    font-size: 0px;
    line-height: 0px;
    margin: 0px 16px;
  }
`;

export const EnterLayout = () => {
  return (
    <StyledMainContainer>
      <StyledFormContainer>
        <StyledTitleContainer>
          <h1>Welcome to Magenta tiger Blog</h1>
          <h3>Built off hard work</h3>
        </StyledTitleContainer>
        <StyledBtnContainer>
          <Button variant="primary" label="Continue with Github" />
        </StyledBtnContainer>
        <StyledTextDiv>
          Have a password? Continue with your email address
        </StyledTextDiv>
        <form action="submit">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password" />
        </form>
      </StyledFormContainer>
    </StyledMainContainer>
  );
};
