import styled from "styled-components";
import { DropdownProps } from "@/types/src/styled-components/dropdown.types";
import { Button } from "./Button";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

const DropdownWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* Change top prop when nav is ready */
  top: 3.5rem;
  right: 0.5rem;
  position: absolute;
  max-width: 15rem;
  width: 100%;
  height: 20rem;
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 5px solid #aaaaaa;
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
  padding: 1rem 0;
`;

const DropdownListItem = styled.li`
  width: 100%;
`;

const Dropdown = ({ name, username }: DropdownProps) => {
  return (
    <DropdownWrapper>
      <DropdownHeader>
        <AuthorWrapper>
          <AuthorTitle>{name}</AuthorTitle>
          <AuthorDescription>{username}</AuthorDescription>
        </AuthorWrapper>
      </DropdownHeader>
      <DropdownListWrapper>
        <DropdownListItem>
          <Button variant="text" icon={faPlusSquare} full size="md1">
            Create Post
          </Button>
        </DropdownListItem>
      </DropdownListWrapper>
      <DropdownFooter>
        <Button variant="primary" shadow danger size="sm3" bold full>
          Sign out
        </Button>
      </DropdownFooter>
    </DropdownWrapper>
  );
};

export { Dropdown };
