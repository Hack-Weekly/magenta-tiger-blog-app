import styled from "styled-components";

const DropdownWrapper = styled.aside`
  top: 3.5rem;
  right: 20%;
  position: absolute;
  max-width: 15rem;
  width: 100%;
  height: 20rem;
  background-color: #ffffff;
  border: 5px solid #313131;
  box-shadow: -9px 9px 0px 0px #313131;
  padding: 0;
  margin: 0;
`;

const DropdownHeader = styled.div`
  width: 100%;
  background-color: #5e5e5e;
`;
const DropdownFooter = styled.div``;
const AuthorWrapper = styled.div``;
const AuthorTitle = styled.p`
  padding: 0;
  margin: 0;
`;
const AuthorDescription = styled.p`
  padding: 0;
  margin: 0;
`;

const DropdownListWrapper = styled.ul`
  list-style: none;
  width: 100%;
`;

const DropdownListItem = styled.li`
  width: 100%;
`;

const Dropdown = () => {
  return (
    <DropdownWrapper>
      <DropdownHeader>
        <AuthorWrapper>
          <AuthorTitle>Vlad Okuskov</AuthorTitle>
          <AuthorDescription>@swappnet</AuthorDescription>
        </AuthorWrapper>
      </DropdownHeader>
      <DropdownListWrapper>
        <DropdownListItem></DropdownListItem>
      </DropdownListWrapper>
      <DropdownFooter></DropdownFooter>
    </DropdownWrapper>
  );
};

export { Dropdown };
