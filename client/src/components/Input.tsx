import { InputProps } from '@/types/src/styled-components';
import styled, {css} from 'styled-components';
import { sizes } from './Button';

const StyledInput = styled(({textArea, ...rest}) => 
    textArea ? <textarea {...rest} /> : <input {...rest} />
)<InputProps>`
    border: none;
    border-radius: 5px;
    ${({ size }) =>
        size === 'sm1'
            ? sizes.sm1
            : size === 'sm2'
            ? sizes.sm2
            : size === 'sm3'
            ? sizes.sm3
            : size === 'md1'
            ? sizes.md1
            : size === 'md2'
            ? sizes.md2
            : size === 'md3'
            ? sizes.md3
            : size === 'xl1'
            ? sizes.xl1
            : size === 'xl2'
            ? sizes.xl2
            : size === 'xl3'
            ? sizes.xl3
            : ''}
    padding: 0.5rem;
    resize: none;

    ${({border}) =>
        border && css`
            border: 1px solid black;
        `}

    ${({width, weight}) => 
        css`
            width: ${width};
            weight: ${weight};
        `}

    &:focus {
        outline: none;
    }
`

function Input({
    className,
    textArea,
    type,
    accept,
    value,
    placeholder,
    width,
    weight,
    border,
    size,
    onChange
}: InputProps) {
    return (
        <StyledInput 
            className={className}
            textArea={textArea}
            type={type}
            accept={accept}
            value={value}
            placeholder={placeholder}
            width={width}
            weight={weight}
            border={border}
            size={size}
            onChange={onChange}
        ></StyledInput>
    );
};

export { Input };