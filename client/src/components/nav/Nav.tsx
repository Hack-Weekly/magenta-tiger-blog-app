import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ProfileButtonProps } from "../../types/src/props/NavProps";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

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
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: contain;
  background-position: center;
  border: 2px solid black;
  transition: 0.2s;
  cursor: pointer;
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

const SidebarMainWrapper = styled.div`
  top: 4rem;
  z-index: 9;
  width: 100%;
  position: absolute;
  background-color: #00000022;
`;

const SidebarWrapper = styled.div`
  padding: 0.5rem;
  width: 60%;
  max-width: 20rem;
  min-width: 10rem;
  height: 100vh;
  background-color: #fafafa;
  box-shadow: 4px 0px 0px 0px rgba(0, 0, 0, 1);
  overflow-y: scroll;
  @media (min-width: 680px) {
    display: none;
  }
`;

const SidebarHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Nav = () => {
  const user = { photoUrl: null }; //temporary logic until we can pull the user info in

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarBtnRef = useRef<HTMLButtonElement>(null);
  const dropdownBtnRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  const handleOpenSidebar = () => {
    setIsSidebarOpen(prev => !prev);
    setIsDropdownOpen(false);
  };

  const handleProfileMenuOpen = () => {
    if (!isSidebarOpen) {
      setIsDropdownOpen(prev => !prev);
    }
  };

  const handleProfileMenuClosing = () => {
    if (!isSidebarOpen) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        e.target !== sidebarBtnRef.current
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
  }, [navigate]);

  return (
    <StyledNav>
      <NavContentWrapper>
        <StyledMenuBtn onClick={handleOpenSidebar} ref={sidebarBtnRef}>
          <StyledLine1Div />
          <StyledLine2Div />
          <StyledLine3Div />
        </StyledMenuBtn>
        {/* 
           update logic for user display */}
        {user ? (
          <StyledProfileBtn
            imageUrl={user.photoUrl}
            onClick={handleProfileMenuOpen}
            ref={dropdownBtnRef}
          >
            {!user.photoUrl && <FontAwesomeIcon icon={faUser} />}
          </StyledProfileBtn>
        ) : (
          <Button label="Create Account" variant="primary" size="sm2" />
        )}
      </NavContentWrapper>
      {isSidebarOpen && (
        <SidebarMainWrapper>
          <SidebarWrapper ref={sidebarRef}>
            <SidebarHeaderWrapper>
              <Button
                variant="text"
                icon={faClose}
                onClick={handleOpenSidebar}
              />
            </SidebarHeaderWrapper>
          </SidebarWrapper>
        </SidebarMainWrapper>
      )}
      {isDropdownOpen && !isSidebarOpen && (
        <Dropdown
          onClose={handleProfileMenuClosing}
          btnRef={dropdownBtnRef}
          username={"username"}
          name={"Name Surname"}
        />
      )}
    </StyledNav>
  );
};

export default Nav;
