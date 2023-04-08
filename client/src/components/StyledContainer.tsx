import styled, { css } from "styled-components";

export type StyledContainerProps = {
  variant?: "page" | "mobile-page";
};
const StyledContainer = styled.main<StyledContainerProps>`
  ${({ variant }) =>
    variant === "page" &&
    css`
      max-width: 70rem;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 10fr; /* 20% 60% 20% */
      grid-template-rows: auto;
      grid-template-areas:
        ". main ."
        ". sidebar-left .";
      margin-top: 4rem;
      padding: 1rem;
      @media (min-width: 680px) {
        grid-template-columns: 3fr 7fr; /* 20% 60% 20% */
      }
    `}

  ${({ variant }) =>
    variant === "mobile-page" &&
    css`
      margin: 0 auto;
      width: 100%;
      display: grid;
      margin-top: 4rem;
      padding: 1rem;
    `}
`;

export default StyledContainer;
