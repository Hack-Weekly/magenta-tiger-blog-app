import styled from "styled-components";
import { ProfileButtonProps } from "../../types/src/props/NavProps";
import { Button } from "../Button";

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0;
  margin: 0;
  height: 4rem;
  background-color: #fafafa;
  box-shadow: 0px -10px 11px -1px rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

const NavContentWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 70rem;

  @media (min-width: 680px) {
    justify-content: flex-end;
  }
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
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover,
  &:focus {
    background-color: #5a5a5a;
  }
  &:active {
    background-color: #272727;
  }
  @media (min-width: 680px) {
    display: none;
  }
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
    <StyledNav>
      <NavContentWrapper>
        <StyledMenuBtn>
          <StyledLine1Div />
          <StyledLine2Div />
          <StyledLine3Div />
        </StyledMenuBtn>
        {/* 
           update logic for user display */}
        {user ? (
          <StyledProfileBtn imageUrl={null} />
        ) : (
          <Button label="Create Account" variant="primary" size="sm2" />
        )}
      </NavContentWrapper>
    </StyledNav>
  );
};

export default Nav;
