import { Size } from "../shared";

export type InputProps = {
    className?: string;
    textArea?: boolean;
    value?: string;
    placeholder?: string;
    width?: string;
    border?: boolean;
    weight?: 'normal' | 'bold';
    size?: Size; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}