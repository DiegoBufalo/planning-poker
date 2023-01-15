import { StyledInput } from "./styles";



interface InputProps {
    placeHolder?: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
    adptativeSize?: boolean;
    maxLength?: number;
}

export const Input = ({ setValue, placeHolder, adptativeSize = false, maxLength = 20 }: InputProps) => {
    return (
        <StyledInput
            className={`${adptativeSize ? 'adptative' : ''}`}
            type="text"
            onChange={(event) => setValue(event.target.value)} placeholder={placeHolder}
            maxLength={maxLength}
        />
    );
}