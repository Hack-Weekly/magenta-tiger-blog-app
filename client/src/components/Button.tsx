import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "@/types/src/styled-components/button.types";

const sizes = {
  sm1: css`
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  `,
  sm2: css`
    padding: 0.45rem 1rem;
    font-size: 0.95rem;
  `,
  sm3: css`
    padding: 0.5rem 1.1rem;
    font-size: 1rem;
  `,
  md1: css`
    padding: 0.55rem 1.3rem;
    font-size: 1.125rem;
  `,
  md2: css`
    padding: 0.55rem 1.3rem;
    font-size: 1.25rem;
  `,
  md3: css`
    padding: 0.6rem 2rem;
    font-size: 1.375rem;
  `,
  xl1: css`
    padding: 0.6rem 2.5rem;
    font-size: 1.5rem;
  `,
  xl2: css`
    padding: 0.65rem 2.75rem;
    font-size: 1.625rem;
  `,
  xl3: css`
    padding: 0.65rem 2.95rem;
    font-size: 1.75rem;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  font-family: "Inter";
  font-weight: ${({ bold }) => (bold ? "600" : "500")};
  transition: 0.1s;
  gap: 1.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 0.15rem solid #000000;
  color: #000000;
  box-shadow: 3px 4px 0px 0px rgba(0, 0, 0, 1);
  width: ${({ full }) => (full ? "100%" : "auto")};
  cursor: pointer;
  ${({ size }) =>
    size === "sm1"
      ? sizes.sm1
      : size === "sm2"
      ? sizes.sm2
      : size === "sm3"
      ? sizes.sm3
      : size === "md1"
      ? sizes.md1
      : size === "md2"
      ? sizes.md2
      : size === "md3"
      ? sizes.md3
      : size === "xl1"
      ? sizes.xl1
      : size === "xl2"
      ? sizes.xl2
      : size === "xl3"
      ? sizes.xl3
      : ""}
  ${({ variant }) =>
    variant === "primary"
      ? css`
          background-color: #bdeec1;
          &:hover,
          &:focus {
            background-color: #cbf8cf;
            color: #333333;
          }
          &:active {
            background-color: #b3e6b8;
            transform: translateY(2px);
            box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 1);
          }
        `
      : variant === "secondary"
      ? css`
          background-color: #ccb3eb;
          &:hover,
          &:focus {
            background-color: #dac1f8;
            color: #333333;
          }
          &:active {
            background-color: #c2a8e0;
            transform: translateY(2px);
            box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 1);
          }
        `
      : variant === "icon"
      ? css`
          background-color: transparent;
          border: 0.15rem solid #000000;
          border-radius: 50%;
          box-shadow: none;
          padding: 0.3rem;
          &:hover,
          &:focus {
            color: #525252;
            border-color: #525252;
          }
          &:active {
            color: #303030;
            border-color: #303030;
          }
        `
      : variant === "text"
      ? css`
          background-color: transparent;
          border: none;
          box-shadow: none;
          border-radius: 8px;
          &:hover,
          &:focus {
            color: #525252;
            background-color: #00000011;
          }
          &:active {
            color: #1f1f1f;
          }
        `
      : variant === "danger"
      ? css`
          background-color: #e73030;
          &:hover,
          &:focus {
            background-color: #f73939;
            color: #000000;
          }
          &:active {
            background-color: #e73030;
            transform: translateY(2px);
            box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 1);
          }
        `
      : variant === "icon-bg" &&
        css`
          box-shadow: 2px 3px 0px 0px rgba(0, 0, 0, 1);
          padding: 0.5rem;
          background-color: #ccb3eb;
          &:hover,
          &:focus {
            background-color: #dac1f8;
            color: #333333;
          }
          &:active {
            background-color: #c2a8e0;
            transform: translateY(2px);
            box-shadow: 1px 2px 0px 0px rgba(0, 0, 0, 1);
          }
        `}
    ${({ disabled, variant }) =>
    disabled &&
    (variant === "primary" ||
      variant === "secondary" ||
      variant === "icon-bg" ||
      variant === "danger")
      ? css`
          cursor: default;
          background-color: #e6e6e6;
          &:hover,
          &:focus {
            background-color: #e6e6e6;
            color: #000000;
          }
          &:active {
            background-color: #e6e6e6;
            box-shadow: 3px 4px 0px 0px rgba(0, 0, 0, 1);
            transform: none;
          }
        `
      : disabled &&
        css`
          cursor: default;
          background-color: transparent;
          color: #8f8f8f;
          &:hover,
          &:focus {
            background-color: transparent;
            border-color: #000000;
            color: #8f8f8f;
          }
          &:active {
            background-color: transparent;
            box-shadow: none;
            transform: none;
          }
        `}
`;

function Button({
  className,
  icon,
  label,
  variant = "primary",
  danger,
  disabled,
  bold,
  size = "sm3",
  onClick,
  full = false,
}: ButtonProps) {
  return (
    <StyledButton
      title={label}
      className={className}
      variant={variant}
      danger={danger}
      disabled={disabled}
      bold={bold}
      size={size}
      onClick={onClick}
      full={full}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {variant !== "icon" && label}
    </StyledButton>
  );
}

export { Button };
