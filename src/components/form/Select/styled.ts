import styled, { FlattenSimpleInterpolation } from "styled-components";

export const Wrapper = styled.div<{
  cssStyles?: FlattenSimpleInterpolation;
}>`
  width: 100%;
  cursor: pointer;
  ${(props) => props.cssStyles}
`;

export const Selected = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #232325;
`;

export const DropdpwnIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const Selector = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  background: #FFF;
  overflow: hidden;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 16px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #232325;
  &.selected {
    background: #DEDEE0;
  }
`;
