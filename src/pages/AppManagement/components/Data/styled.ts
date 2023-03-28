import styled from "styled-components";
import { Flex } from "@/styled";

export const Wrapper = styled(Flex)`
  flex-wrap: wrap;
  .pl-18 {
    padding-left: 18px;
  }
  .pl-6 {
    padding-left: 6px;
  }
`;

export const Label = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #007AFF;
  text-align: left;
  &.single-line {
    width: 100%;
  }
`;

export const Value = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  width: 472px;
  color: #232325;
  text-align: left;
  &.tiny {
    width: 254px;
  }
`;

export const CopyIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CollapseIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const FullValue = styled.div`
  font-family: Poppins;
  width: 100%;
  background: #007AFF;
  border-radius: 10px;
  padding: 10px 22px;
  margin-top: 8px;
  color: #FFF;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  word-break: break-all;
  &.tiny {
    padding: 10px;
  }
`;
