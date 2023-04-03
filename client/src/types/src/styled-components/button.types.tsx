import { Size } from "../shared";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ButtonTheme = "primary" | "secondary" | "icon" | "text";
//export type Filled = 'primary' | 'secondary' | 'none';

//primary - with shadow and border
//secondary - just border
//

export type ButtonProps = {
  children?: string;
  className?: string;
  icon?: IconProp;
  variant?: ButtonTheme;
  danger?: boolean;
  disabled?: boolean;
  active?: boolean;
  shadow?: boolean;
  transparent?: boolean;
  bold?: boolean;
  size?: Size;
  full?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type StyledButtonProps = {
  variant?: ButtonTheme;
  danger?: boolean;
  disabled?: boolean;
  active?: boolean;
  shadow?: boolean;
  transparent?: boolean;
  bold?: boolean;
  size?: Size;
  full?: boolean;
};
