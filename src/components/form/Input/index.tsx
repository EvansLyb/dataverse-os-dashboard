import { useEffect, useState } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { Wrapper, InputLabel, InputBox } from "./styled";

interface InputProps {
  label?: string;
  labelOffset?: string;
  value?: string;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  onBlur?: Function;
  onClick?: Function;
  cssStyles?: FlattenSimpleInterpolation;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  labelOffset = "16px",
  value,
  placeholder,
  type = "text",
  readOnly = false,
  onChange,
  onBlur,
  onClick,
  cssStyles,
  className,
}): React.ReactElement => {
  const [currentValue, setCurrentValue] = useState(value || "");

  useEffect(() => {
    if (value === undefined) return;
    onChange?.(value || "");
    setCurrentValue(value || "");
  }, [onChange, value]);

  return (
    <Wrapper cssStyles={cssStyles} className={className}>
      {label && <InputLabel offset={labelOffset}>{label}</InputLabel>}
      <InputBox
        value={currentValue}
        placeholder={placeholder}
        type={type}
        readOnly={readOnly}
        onChange={(event) => {
          setCurrentValue(event.currentTarget.value);
          onChange?.(event.currentTarget.value);
        }}
        onBlur={(event) => onBlur?.(event)}
        onClick={(event) => onClick?.(event)}
      />
    </Wrapper>
  )
}

export default Input;
