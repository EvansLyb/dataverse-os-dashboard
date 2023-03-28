import React, { useEffect, useState } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { Wrapper, InputLabel, InlineLabel, InputBox, Indicator } from "./styled";

export interface InputProps {
  width?: string;
  height?: string;
  label?: string;
  labelOffset?: string;
  inlineLabel?: boolean;
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  tiny?: boolean;
  maxLength?: number;
  onChange?: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement, Element>) => void;
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void;
  cssStyles?: FlattenSimpleInterpolation;
  className?: string;
}

const Textarea: React.FC<InputProps> = ({
  height = 500,
  width = 500,
  label,
  labelOffset = "16px",
  inlineLabel = false,
  placeholder,
  value,
  readOnly = false,
  autoFocus = false,
  tiny = false,
  maxLength,
  onChange,
  onKeyDown,
  onBlur,
  onClick,
  cssStyles,
  className,
}) => {
  const [currentValue, setCurrentValue] = useState(value || "");

  useEffect(() => {
    if (value === undefined) return;
    onChange?.(value || "");
    setCurrentValue(value || "");
  }, [onChange, value]);

  return (
    <Wrapper cssStyles={cssStyles} className={className}>
      {label && inlineLabel ? <InlineLabel offset={labelOffset}>{label}</InlineLabel> : <InputLabel offset={labelOffset}>{label}</InputLabel>}
      <InputBox
        width={width}
        height={height}
        placeholder={placeholder}
        value={currentValue}
        readOnly={readOnly}
        tiny={tiny}
        onChange={(event) => {
          if (maxLength && event.currentTarget.value.length > maxLength) {
            event.currentTarget.value = currentValue;
          }
          setCurrentValue(event.currentTarget.value);
          onChange?.(event.currentTarget.value);
        }}
        onBlur={onBlur}
        onClick={onClick}
        onKeyDown={onKeyDown}
        autoFocus={autoFocus}
      />
      {maxLength && <Indicator>{currentValue?.length || 0}/{maxLength}</Indicator>}
    </Wrapper>
  );
};

export default Textarea;
