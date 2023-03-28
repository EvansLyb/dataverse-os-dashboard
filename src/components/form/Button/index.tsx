import React, { ReactNode } from "react";
import { FlattenSimpleInterpolation } from "styled-components";
import { ButtonContainer } from "./styled";

export interface ButtonType {
  type?: "primary" | "outlined";
}
export interface ButtonProps extends ButtonType {
  width?: string;
  children?: ReactNode;
  onClick?: () => void;
  cssStyles?: FlattenSimpleInterpolation;
}

const Button: React.FC<ButtonProps> = ({
  width = "133px",
  type = "primary",
  children,
  onClick,
  cssStyles,
}) => {
  return (
    <ButtonContainer
      width={width}
      type={type}
      onClick={() => onClick?.()}
      cssStyles={cssStyles}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
