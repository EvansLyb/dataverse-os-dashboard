import styled, { FlattenSimpleInterpolation } from "styled-components";

export const Wrapper = styled.div<{
  cssStyles?: FlattenSimpleInterpolation;
}>`
  width: 100%;
  position: relative;
  ${(props) => props.cssStyles}
`;

export const InputLabel = styled.div<{
  offset: string;
}>`
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  padding-bottom: 3px;
  padding-left: ${(props) => props.offset};
  color: #007AFF;
  text-align: left;
`;

export const InlineLabel = styled.div<{
  offset: string;
}>`
  position: absolute;
  left: 12px;
  transform: translate(0, -50%);
  padding: 0 8px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  color: #232325;
  background: #FFF;
`;

export const InputBox = styled.textarea<{
  height: number | string;
  width: number | string;
  tiny: boolean;
}>`
  font-family: Poppins;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.tiny ? "10px 21px 10px 19px" : "16px"};
  text-align: left;
  font-weight: 400;
  font-size: ${(props) => props.tiny ? "12px" : "15px"};
  line-height: ${(props) => props.tiny ? "18px" : "24px"};
  transition: all 0.3s;
  border: 1px solid #A0CDFE;
  box-sizing: border-box;
  background: #FFF;
  border-radius: 10px;
  resize: none;
  outline: none;
  word-break: break-all;
  color: #000;
  &::placeholder {
    color: #999;
  }
`;

export const Indicator = styled.span`
  font-family: Poppins;
  position: absolute;
  right: 12px;
  bottom: 7px;
  color: #A0CDFE;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
`;
