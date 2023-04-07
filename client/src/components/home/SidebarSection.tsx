import styled from "styled-components";

const SideBarWrapper = styled.aside`
  position: sticky;
  display: none;
  @media (min-width: 680px) {
    display: block;
    margin-right: 2rem;
  }
  top: 6rem;
  margin-top: 1rem;
  border: 0.15rem solid #aaaaaa;
  border-radius: 0.3rem;
  max-height: 40rem;
`;

const SidebarContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0.5rem;
  width: 100%;
  position: relative;
`;
const Sidebar = () => {
  return (
    <SideBarWrapper>
      <SidebarContentWrapper></SidebarContentWrapper>
    </SideBarWrapper>
  );
};

export { Sidebar };
