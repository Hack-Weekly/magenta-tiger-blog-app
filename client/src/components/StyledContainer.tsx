import styled, { css } from "styled-components";

export type StyledContainerProps = {
  variant?: "page" | "detail-page";
};
const StyledContainer = styled.main<StyledContainerProps>`
  ${({ variant }) =>
    variant === "page" &&
    css`
      max-width: 70rem;
      margin: 0 auto;
      width: 100%;
      display: grid;
      grid-template-columns: 10fr;
      grid-template-rows: auto;
      grid-template-areas:
        ". main ."
        ". sidebar-left .";
      margin-top: 4rem;
      padding: 1rem;
      @media (min-width: 680px) {
        grid-template-columns: 2fr 7fr;
      }
    `}

  ${({ variant }) =>
    variant === "detail-page" &&
    css`
      position: relative;
      margin: 0 auto;
      width: 100%;
      max-width: 70rem;
      display: grid;
      margin-top: 4rem;
    `}
`;

export default StyledContainer;
