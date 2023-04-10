import { Size } from "../shared";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ButtonProps = {
  className?: string;
  icon?: IconProp;
  variant?:
    | "primary"
    | "secondary"
    | "icon"
    | "login-btn"
    | "icon-bg"
    | "text"
    | "danger";
  danger?: boolean;
  disabled?: boolean;
  bold?: boolean;
  size?: Size;
  full?: boolean;
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
