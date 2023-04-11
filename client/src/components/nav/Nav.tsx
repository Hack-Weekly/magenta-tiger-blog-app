import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { ProfileButtonProps } from "../../types/src/props/NavProps";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import Logo from "../../assets/logo.svg";
import { AuthorImagePlacholder, AuthorImageWrapper } from "../StyledAuthor";
import { Link } from "react-router-dom";

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
  position: relative;
`;

const ProfileButton = styled.button<ProfileButtonProps>`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  transition: 0.2s;
  background-color: none;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  &:active {
    opacity: 1;
  }
`;

const LogoWrapper = styled.div`
  max-width: 9rem;
  max-height: 100%;
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
  a {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  svg {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
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

const SectionTitle = styled.h3`
  font-family: "Inter";
  color: #2c2c2c;
`;

const SidebarSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
`;
const SectionBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const Nav = () => {
  const user = { photoUrl: null }; //temporary logic until we can pull the user info in

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
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
        navRef.current &&
        !sidebarRef.current.contains(e.target as Node) &&
        !navRef.current.contains(e.target as Node)
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
      <NavContentWrapper ref={navRef}>
        <StyledMenuBtn onClick={handleOpenSidebar} ref={sidebarBtnRef}>
          <StyledLine1Div />
          <StyledLine2Div />
          <StyledLine3Div />
        </StyledMenuBtn>
        <LogoWrapper>
          <Link to="/" title="Go to Home">
            <Logo />
          </Link>
        </LogoWrapper>
        {user ? (
          <ProfileButton onClick={handleProfileMenuOpen} ref={dropdownBtnRef}>
            {
              <AuthorImageWrapper>
                <AuthorImagePlacholder>
                  <FontAwesomeIcon icon={faCircleUser} />
                </AuthorImagePlacholder>
              </AuthorImageWrapper>
            }
          </ProfileButton>
        ) : (
          <Button label="Create Account" variant="primary" size="sm2" />
        )}
        {isDropdownOpen && !isSidebarOpen && (
          <Dropdown
            onClose={handleProfileMenuClosing}
            isDropdownOpen={isDropdownOpen}
            navRef={navRef}
            username={"username"}
            name={"Guest"}
          />
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
            <SidebarSectionWrapper>
              <SectionTitle>Links</SectionTitle>
              <SectionBody>
                <Button
                  variant="primary"
                  label="Home"
                  full
                  onClick={() => navigate("/")}
                />
              </SectionBody>
            </SidebarSectionWrapper>
          </SidebarWrapper>
        </SidebarMainWrapper>
      )}
    </StyledNav>
  );
};

export default Nav;
