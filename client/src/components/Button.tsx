import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps, StyledButtonProps } from '../types/src/styled-components';

const StyledButton = styled.button<StyledButtonProps>`
    font-family: 'Inter';
    font-weight: 500;
    padding: 0.55rem 0.86rem;
    transition: 0.2s;

    ${({ variant, danger, disabled, active, shadow, filled, size }) =>
        css`
            &:hover,
            &:focus-visible {
                background-color: ${disabled
                    ? 'var(--btn-disabled-hover)'
                    : danger
                    ? 'var(--btn-danger-hover)'
                    : variant === 'primary' || (variant === 'icon' && filled === 'primary')
                    ? 'var(--btn-primary-hover)'
                    : variant === 'secondary' || (variant === 'icon' && filled === 'secondary')
                    ? 'var(--btn-secondary-hover)'
                    : 'none'
                };
                color: ${disabled
                    ? 'var(--btn-disabled-text)'
                    : variant === 'text' && !active 
                    ? 'var(--btn-text-hover)'
                    : variant === 'text' && active
                    ? 'var(--btn-text-active)'
                    : variant === 'icon' && filled === 'none'
                    ? 'var(--btn-text-hover)'
                    : 'var(--btn-black)'
                };
            }

            &:active {
                background-color: ${disabled
                    ? 'var(--btn-disabled-hover)'
                    : danger 
                    ? 'var(--btn-danger-active)'
                    : variant === 'primary' || (variant === 'icon' && filled === 'primary')
                    ? 'var(--btn-primary-active)'
                    : variant === 'secondary' || (variant === 'icon' && filled === 'secondary')
                    ? 'var(--btn-secondary-active)'
                    : 'none'
                };
                color: ${disabled
                    ? 'var(--btn-disabled-text)'
                    : variant === 'text' && !active 
                    ? 'var(--btn-text)'
                    : variant === 'text' && active
                    ? 'var(--btn-text-active)'
                    : variant === 'icon' && filled === 'none'
                    ? 'var(--btn-text)'
                    : 'var(--btn-black)'
                };
            }

            background-color: ${disabled
                ? 'var(--btn-disabled)'
                : danger
                ? 'var(--btn-danger)'
                : variant === 'primary' || (variant === 'icon' && filled === 'primary')
                ? 'var(--btn-primary)'
                : variant === 'secondary' || (variant === 'icon' && filled === 'secondary')
                ? 'var(--btn-secondary)'
                : 'transparent'};
            border: ${disabled
                ? '1px solid var(--btn-disabled-text)'
                : variant !== 'text' && !(variant === 'icon' && filled === 'none')
                ? '2px solid var(--btn-black)'
                : 'none'};
            color: ${disabled
                ? 'var(--btn-disabled-text)'
                : variant === 'text' && active
                ? 'var(--btn-text-active)'
                : variant === 'text'
                ? 'var(--btn-text)'
                : 'var(--btn-black)'};
            font-size: ${size === 'small'
                ? '0.8rem'
                : size === 'middle'
                ? '1.4rem'
                : '2rem'};
            box-shadow: ${shadow
                ? 'var(--box-shadow)'
                : 'none' };
            cursor: ${disabled
                ? 'not-allowed'
                : 'pointer'};
        `};
`

function Button({
    children,
    className,
    icon,
    variant='primary',
    danger,
    disabled,
    active,
    shadow,
    filled='none',
    size='middle',
    onClick
}: ButtonProps) {
    return (
        <StyledButton
            className={className}
            variant={variant}
            danger={danger}
            disabled={disabled}
            active={active}
            shadow={shadow}
            size={size}
            filled={filled}
            onClick={onClick}
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            {children && <span>{children}</span>}
        </StyledButton>
    );
}

export { Button }