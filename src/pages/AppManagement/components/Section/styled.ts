import styled from "styled-components";

export const Wrapper = styled.div`
  background: #FFF;
  border: 1px solid #A0CDFE;
  border-radius: 18px;
  width: fit-content;
`;

export const Header = styled.div`
  border-bottom: 1px solid #DEDEE0;
`;

export const Title = styled.div<{
  float: "left" | "right";
}>`
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #232325;
  padding: ${(props) => props.float === "left" ? "18px 59px" : "18px 31px"};
  text-align: left;
`;

export const Footer = styled.div`
  border-top: 1px solid #DEDEE0;;
`;
