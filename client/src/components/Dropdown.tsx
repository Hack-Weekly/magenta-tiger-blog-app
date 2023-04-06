import styled from "styled-components";
import { Button } from "./Button";
import { DropdownProps } from "@/types/src/styled-components/dropdown.types";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 3.3rem;
  right: 0.5rem;
  position: absolute;
  width: 15rem;
  height: 20rem;
  background-color: #ffffff;
  border: 3px solid #aaaaaa;
  padding: 0;
  margin: 0;
`;

const DropdownHeader = styled.div`
  width: 100%;
  background-color: #fafafa;
  border-bottom: 2px solid #d6d6d6;
`;
const DropdownFooter = styled.div`
  border-top: 2px solid #d6d6d6;
  background-color: #fafafa;
  width: 100%;
  padding: 1rem 2rem;
  height: 100%;
  max-height: 5rem;
`;

const AuthorWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem 1rem;
`;

const AuthorTitle = styled.p`
  font-weight: 600;
  color: #303030;
  font-family: "Inter";
  padding: 0;
  margin: 0;
`;
const AuthorDescription = styled.p`
  font-family: "Inter";
  padding: 0;
  margin: 0;
  font-size: 0.9rem;
  color: #696969;
`;

const DropdownListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 1rem 0.5rem;
`;

const DropdownListItem = styled.li`
  width: 100%;
`;

const Dropdown = ({ name, username, btnRef, onClose }: DropdownProps) => {
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        e.target !== btnRef.current
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownHeader>
        <AuthorWrapper>
          <AuthorTitle>{name}</AuthorTitle>
          <AuthorDescription>{`@${username}`}</AuthorDescription>
        </AuthorWrapper>
      </DropdownHeader>
      <DropdownListWrapper>
        <DropdownListItem>
          <Button
            variant="text"
            icon={faPlusSquare}
            size="md1"
            label="Create Post"
            full
            onClick={() => navigate("/create")}
          />
        </DropdownListItem>
      </DropdownListWrapper>
      <DropdownFooter>
        <Button variant="danger" size="md1" label="Sign out" full />
      </DropdownFooter>
    </DropdownWrapper>
  );
};

export { Dropdown };
