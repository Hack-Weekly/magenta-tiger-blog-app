import { Size } from "../shared";

export type InputProps = {
    className?: string;
    textArea?: boolean;
    type?: string;
    accept?: string;
    height?: string;
    value?: string;
    placeholder?: string;
    width?: string;
    border?: boolean;
    weight?: 'normal' | 'bold';
    size?: Size; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}