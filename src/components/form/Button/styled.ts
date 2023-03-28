import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export const ButtonContainer = styled.div<{
  width: string;
  type: string;
  cssStyles?: FlattenSimpleInterpolation;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  appearance: auto;
  user-select: none;
  white-space: pre;
  text-align: center;
  box-sizing: border-box;
  border-radius: 10px;
  white-space: nowrap;
  padding: 10px 0;
  width: fit-content;
  min-width: ${(props) => props.width};

  // primary
  ${(props) =>
    props.type === "primary" &&
    css`
      color: #FFF;
      background-color: #007AFF;
    `}

  // outlined
  ${(props) =>
    props.type === "outlined" &&
    css`
      color: #007AFF;
      background-color: #FFF;
      box-shadow: inset 0 0 0 1px #007AFF;
    `}

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  ${(props) => props.cssStyles}
`;
