import { FlattenSimpleInterpolation } from "styled-components";
import { Wrapper, Selected, DropdpwnIcon, Selector, Option } from "./styled";
import arrowDownIcon from "@/assets/icon-arrow-down.svg";
import { Flex } from "@/styled";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/utils/useClickOutside";

type OptionProps = {
  name: string;
  value: string;
}

interface InputProps {
  value?: string;
  options: OptionProps[];
  onChange?: (data: OptionProps) => void;
  cssStyles?: FlattenSimpleInterpolation;
  className?: string;
}

const Select: React.FC<InputProps> = ({
  value,
  options = [],
  onChange,
  cssStyles,
  className,
}): React.ReactElement => {
  const [selectorVisible, setSelectorVisible] = useState(false);
  const [selectIdx, setSelectIdx] = useState(0);
  const ref = useRef(null);
  useClickOutside(ref, () => {
    setSelectorVisible(false);
  });

  useEffect(() => {
    const currentIdx = options.findIndex((option) => option.value === value);
    if (currentIdx !== -1) {
      setSelectIdx(currentIdx);
    }
  }, [value]);

  return (
    <Wrapper cssStyles={cssStyles} className={className} ref={ref}>
      <Flex
        className="items-center justify-end"
        onClick={(e: any) => {
          e.stopPropagation();
          setSelectorVisible(!selectorVisible);
        }}
      >
        <Selected>{options[selectIdx].value}</Selected>
        <DropdpwnIcon src={arrowDownIcon} />
      </Flex>
      {selectorVisible && (
        <Selector>
          {options.map((option, idx) => (
            <Option
              className={idx === selectIdx ? "selected" : ""}
              key={`${idx}`}
              onClick={() => {
                setSelectIdx(idx);
                onChange?.(options[idx]);
                setSelectorVisible(false);
              }}
            >
              {option.name}
            </Option>
          ))}
        </Selector>
      )}
    </Wrapper>
  )
}

export default Select;
