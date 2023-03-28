import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 55px);
  padding-top: 76px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  height: fit-content;
  padding: 45px 41px 45px 41px;
  background: #FFF;
  border: 1px solid #A0CDFE;
  box-shadow: 0px 1px 21px rgba(0, 0, 0, 0.04);
  border-radius: 18px;
  text-align: center;
`;

export const Logo = styled.img`
  width: 144px;
  height: 118px;
`;

export const Welcome = styled.div`
  font-family: Lato-Regular;
  padding-top: 35px;
  padding-left: 16px;
  padding-bottom: 48px;
  display: flex;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
`;

export const Avatar = styled.img`
  height: 34px;
  width: 34px;
  border-radius: 50%;
  padding-left: 11px;
  padding-right: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
`;
