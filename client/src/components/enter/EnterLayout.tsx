import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { Button } from "../Button";

const StyledMainContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 100%;
  font-family: "Inter";
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

export const EnterLayout = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const loginUrl = `${apiUrl}login`;

  const login = async () => {
    window.location.href = loginUrl;
  };
  return (
    <StyledMainContainer>
      <StyledCardWrapper>
        <StyledTitleContainer>
          <h1>Welcome to Magenta Tiger Blog</h1>
          <h3>Built off passionate developers working mornings and nights</h3>
        </StyledTitleContainer>
        <StyledBtnContainer>
          <Button
            variant="login-btn"
            label="Login with Github"
            icon={faGithubSquare}
            size="md2"
            onClick={login}
          />
        </StyledBtnContainer>
      </StyledCardWrapper>
    </StyledMainContainer>
  );
};
