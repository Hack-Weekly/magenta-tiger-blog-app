import { Size } from '../shared';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ButtonTheme = 'primary' | 'secondary' | 'icon' | 'text';
export type Filled = 'primary' | 'secondary' | 'none';

export type ButtonProps = {
    children?: string;
    className?: string;
    icon?: IconProp;
    variant?: ButtonTheme;
    danger?: boolean;
    disabled?: boolean;
    active?: boolean;
    shadow?: boolean;
    filled?: Filled;
    size?: Size;
    onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void);
}


export type StyledButtonProps = {
    variant?: ButtonTheme;
    danger?: boolean;
    disabled?: boolean;
    active?: boolean;
    shadow?: boolean;
    filled?: Filled;
    size?: Size;
};
  