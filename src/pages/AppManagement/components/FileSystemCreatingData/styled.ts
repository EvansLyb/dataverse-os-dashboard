import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 8px 38px 8px 21px;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  background: #007AFF;
  border-radius: 10px;
  height: 52px;
  min-height: 52px;
  box-sizing: border-box;
  word-break: break-all;
  &.collapsed {
    height: fit-content;
  }
  .value {
    overflow: hidden;
  }
`;

export const Label = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #007AFF;
  text-align: left;
  padding-left: 12px;
  &.single-line {
    width: 100%;
  }
`;


export const CollapseIcon = styled.img`
  position: absolute;
  top: 16px;
  right: 9px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  &.collapsed {
    transform: matrix(1, 0, 0, -1, 0, 0);
  }
`;
