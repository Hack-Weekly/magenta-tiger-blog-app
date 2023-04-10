import { InputProps } from '@/types/src/styled-components';
import styled, {css} from 'styled-components';
import { sizes } from './Button';

const StyledInput = styled(({textArea, ...rest}) => 
    textArea ? <textarea {...rest} /> : <input {...rest} />
)<InputProps>`
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: auto;
    word-break: break-word;
    resize: none;
    line-height: 1.4rem;
    font-style: 

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

    ${({height}) =>
        height && css`
            height: ${height};
        `}

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
        outline: #3182ce;
    }
    &:focus-within {
        border-color: #3182ce;
        box-shadow: #3182ce 0 0 0 1px;
    }
`

function Input({
    className,
    textArea,
    type,
    accept,
    height,
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
            height={height}
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