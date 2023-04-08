import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Size } from "../shared";

export type ButtonProps = {
  className?: string;
  icon?: IconProp;
  variant?: "primary" | "secondary" | "icon" | "icon-bg" | "text" | "danger";
  danger?: boolean;
  disabled?: boolean;
  bold?: boolean;
  size?: Size;
  full?: boolean;
  label?: string;
  transparent?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
