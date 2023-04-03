import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps, StyledButtonProps } from '../types/src/styled-components';

const StyledButton = styled.button<StyledButtonProps>`
    font-family: 'Inter';
    font-weight: 500;
    transition: 0.2s;
    gap: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ variant, danger, disabled, active, shadow, transparent, bold, size }) =>
        css`
            &:hover,
            &:focus-visible {
                background-color: ${disabled
                    ? 'var(--btn-disabled-hover)'
                    : danger
                    ? 'var(--btn-danger-hover)'
                    : variant === 'primary' && !transparent
                    ? 'var(--btn-primary-hover)'
                    : variant === 'secondary' && !transparent
                    ? 'var(--btn-secondary-hover)'
                    : variant !== 'icon' && transparent 
                    ? 'var(--btn-transparent-hover)'
                    : 'none'
                };
                color: ${disabled
                    ? 'var(--btn-disabled-text)'
                    : (variant === 'text' && !active) || (variant === 'icon' && transparent)
                    ? 'var(--btn-text-hover)'
                    : variant === 'text' && active
                    ? 'var(--btn-text-active)'
                    : 'var(--btn-black)'
                };
            }

            &:active {
                background-color: ${disabled
                    ? 'var(--btn-disabled-hover)'
                    : danger 
                    ? 'var(--btn-danger-active)'
                    : variant === 'primary' && !transparent
                    ? 'var(--btn-primary-active)'
                    : variant === 'secondary' && !transparent
                    ? 'var(--btn-secondary-active)'
                    : variant !== 'icon' && transparent 
                    ? 'var(--btn-disabled-hover)'
                    : 'none'
                };
                color: ${disabled
                    ? 'var(--btn-disabled-text)'
                    : variant === 'text' || (variant === 'icon' && transparent)
                    ? 'var(--btn-text)'
                    : 'var(--btn-black)'
                };
            }

            background-color: ${disabled
                ? 'var(--btn-disabled)'
                : danger
                ? 'var(--btn-danger)'
                : variant === 'primary' && !transparent
                ? 'var(--btn-primary)'
                : variant === 'secondary' && !transparent
                ? 'var(--btn-secondary)'
                : 'transparent'};
            border: ${disabled
                ? '1px solid var(--btn-disabled-text)'
                : variant === 'text' || (variant === 'icon' && transparent)
                ? 'none'
                : '2px solid var(--btn-black)'};
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
            font-weight: ${bold
                ? '700'
                : '500'};
            padding: ${variant !== 'text'
                ? '0.55rem 0.86rem'
                : 'none'};
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
    transparent,
    bold,
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
            transparent={transparent}
            bold={bold}
            size={size}
            onClick={onClick}
        >
            {icon && <FontAwesomeIcon icon={icon} />}
            {children && <span>{children}</span>}
        </StyledButton>
    );
}

export { Button }