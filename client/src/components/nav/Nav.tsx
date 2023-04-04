import styled from "styled-components";
import { ProfileButtonProps } from "@/types/navProps";

const StyledNav = styled.nav`
  width: 100%;
  padding: 1rem;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledProfileBtn = styled.button<ProfileButtonProps>`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: contain;
  background-position: center;
  border: 2px solid black;
`;

const StyledMenuBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

const StyledLine1Div = styled.div`
  width: 1.5rem;
  height: 0.2rem;
  background-color: white;
`;
const StyledLine2Div = styled.div`
  width: 1.5rem;
  height: 0.2rem;
  background-color: white;
  margin-left: 0.5rem;
`;
const StyledLine3Div = styled.div`
  width: 1.5rem;
  height: 0.2rem;
  background-color: white;
`;
const Nav = () => {
  //temporary logic until we can pull the user info in//
  const user: boolean = false;

  return (
    <>
      <StyledNav>
        <>
          <StyledMenuBtn>
            <StyledLine1Div />
            <StyledLine2Div />
            <StyledLine3Div />
          </StyledMenuBtn>
          {/* swap with styled button when available
          and update logic for user display */}
          {user ? (
            <StyledProfileBtn imageUrl="https://avatars.githubusercontent.com/u/101993818?v=4" />
          ) : (
            <button>Create account</button>
          )}
        </>
      </StyledNav>
    </>
  );
};

export default Nav;
