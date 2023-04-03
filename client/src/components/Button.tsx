import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps, StyledButtonProps } from "../types/src/styled-components";

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

const StyledButton = styled.button<StyledButtonProps>`
  font-family: "Inter";
  font-weight: 500;
  transition: 0.2s;
  gap: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
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
  ${({ variant, danger, disabled, active, shadow, transparent, bold, full }) =>
    css`
      &:hover,
      &:focus-visible {
        background-color: ${disabled
          ? "var(--btn-disabled-hover)"
          : danger
          ? "var(--btn-danger-hover)"
          : variant === "primary" && !transparent
          ? "var(--btn-primary-hover)"
          : variant === "secondary" && !transparent
          ? "var(--btn-secondary-hover)"
          : variant !== "icon" && transparent
          ? "var(--btn-transparent-hover)"
          : "none"};
        color: ${disabled
          ? "var(--btn-disabled-text)"
          : (variant === "text" && !active) ||
            (variant === "icon" && transparent)
          ? "var(--btn-text-hover)"
          : variant === "text" && active
          ? "var(--btn-text-active)"
          : "var(--btn-black)"};
      }

      &:active {
        background-color: ${disabled
          ? "var(--btn-disabled-hover)"
          : danger
          ? "var(--btn-danger-active)"
          : variant === "primary" && !transparent
          ? "var(--btn-primary-active)"
          : variant === "secondary" && !transparent
          ? "var(--btn-secondary-active)"
          : variant !== "icon" && transparent
          ? "var(--btn-disabled-hover)"
          : "none"};

        color: ${disabled
          ? "var(--btn-disabled-text)"
          : variant === "text" || (variant === "icon" && transparent)
          ? "var(--btn-text)"
          : "var(--btn-black)"};
      }

      background-color: ${disabled
        ? "var(--btn-disabled)"
        : danger
        ? "var(--btn-danger)"
        : variant === "primary" && !transparent
        ? "var(--btn-primary)"
        : variant === "secondary" && !transparent
        ? "var(--btn-secondary)"
        : "transparent"};
      border: ${disabled
        ? "1px solid var(--btn-disabled-text)"
        : variant === "text" || (variant === "icon" && transparent)
        ? "none"
        : "2px solid var(--btn-black)"};
      color: ${disabled
        ? "var(--btn-disabled-text)"
        : variant === "text" && active
        ? "var(--btn-text-active)"
        : variant === "text"
        ? "var(--btn-text)"
        : "var(--btn-black)"};

      font-weight: ${bold ? "700" : "500"};
      width: ${full ? "100%" : "auto"};
      padding: ${variant !== "text" ? "0.55rem 0.86rem" : "none"};
      box-shadow: ${shadow ? "var(--box-shadow)" : "none"};
      cursor: ${disabled ? "not-allowed" : "pointer"};
    `};
`;

function Button({
  children,
  className,
  icon,
  variant = "primary",
  danger,
  disabled,
  active,
  shadow,
  transparent,
  bold,
  size = "sm3",
  onClick,
  full = false,
}: ButtonProps) {
  return (
    <StyledButton
      className={className}
      variant={variant}
      danger={danger}
      disabled={disabled}
      active={active}
      shadow={shadow}
      transparent={transparent}
      bold={bold}
      size={size}
      onClick={onClick}
      full={full}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {children && <span>{children}</span>}
    </StyledButton>
  );
}

export { Button };
