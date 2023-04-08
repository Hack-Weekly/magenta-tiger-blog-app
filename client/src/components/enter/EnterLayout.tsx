import { Button } from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMainContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 100%;
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 1rem;
  box-shadow: 0px 0px 1px grey;
  border-radius: 10px;
  gap: 2rem;
  background-color: white;

  @media (min-width: 500px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    max-width: 35rem;
    padding: 3rem;
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.6rem;
    text-align: center;
  }
  h3 {
    text-align: center;
    font-weight: 400;
    font-size: 1rem;
  }
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
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  input[type="email"],
  input[type="password"] {
    height: 2.5rem;
    padding-left: 0.3rem;
    border-radius: 4px;
    border: 1px solid grey;
  }
`;

const StyledCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1rem;
    height: 1rem;
    border: 0.05em solid grey;
    border-radius: 0.3em;
    transform: translateY(-0.075em);
  }
  input[type="checkbox"]:checked {
    appearance: auto;
  }
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: blue;
  }
`;

export const EnterLayout = () => {
  return (
    <StyledMainContainer>
      <StyledCardWrapper>
        <StyledTitleContainer>
          <h1>Welcome to Magenta Tiger Blog</h1>
          <h3>Built off passionate developers working mornings and nights</h3>
        </StyledTitleContainer>
        <StyledBtnContainer>
          <Button variant="primary" label="Continue with Github" />
        </StyledBtnContainer>
        <StyledTextDiv>
          Have a password? Continue with your email address
        </StyledTextDiv>
        <StyledForm action="submit">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="password">Password </label>
          <input type="password" name="password" id="password" />
          <StyledCheckBoxWrapper>
            <input type="checkbox" name="rememberMe" id="rememberMe" />{" "}
            <label htmlFor="rememberMe">Remember me</label>
          </StyledCheckBoxWrapper>
          <Button variant="primary" label="Continue" />
          <StyledLinkWrapper>
            <Link to={"./resetpassword"}>I forgot my password</Link>
          </StyledLinkWrapper>
        </StyledForm>
      </StyledCardWrapper>
    </StyledMainContainer>
  );
};
