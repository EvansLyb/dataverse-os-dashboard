import styled, { FlattenSimpleInterpolation } from "styled-components";

export const Wrapper = styled.div<{
  cssStyles?: FlattenSimpleInterpolation;
}>`
  width: 100%;
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
`

export const InputBox = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  transition: all 0.3s;
  border: 1px solid #A0CDFE;
  box-sizing: border-box;
  outline: 0;
  &::placeholder {
    color: #999;
  }
  &:focus {
    border: 1px solid #007AFF;
  }
`;
