import styled, { FlattenSimpleInterpolation } from "styled-components";

export const Wrapper = styled.div<{
  cssStyles?: FlattenSimpleInterpolation;
}>`
  position: relative;
  background: #FFFFFF;
  border: 1px solid #A0CDFE;
  border-top: none;
  box-shadow: 0px 1px 21px rgba(0, 0, 0, 0.04);
  border-radius: 18px;
  overflow: hidden;
  box-sizing: border-box;
  ${(props) => props.cssStyles}
`;

export const ProgressBar = styled.div<{
  failed?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 7px;
  background: #A0CDFE;
  box-shadow: 0px 1px 21px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  .progress {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${(props) => props.failed ? "#FF453A" : "#007AFF"};
    transition: width .6s;
  }
`;
