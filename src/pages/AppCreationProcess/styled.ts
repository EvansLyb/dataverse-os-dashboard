import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 55px 145px;
`;

export const PageTitle = styled.div`
  font-family: Lato-Regular;
  font-size: 28px;
  line-height: 34px;
  font-weight: 600;
  padding-bottom: 18px;
  color: #232325;
  width: 100%;
`;

export const InfoArea = styled.div`
  padding: 36px 62px 30px;
  border-bottom: 1px solid #DEDEE0;
  text-align: center;
  box-sizing: border-box;
  .logo {
    width: 89px;
    height: 73px;
  }
  .title {
    font-family: Poppins;
    font-size: 16px;
    line-height: 24px;
    font-size: 500;
    color: #232325;
    padding: 10px 0 18px 0;
    &.status-failed {
      color: #FF453A;
    }
  }
  .info {
    width: 100%;
    height: 56px;
    background: rgba(0, 122, 255, 0.08);
    border: 1.5px solid #A0CDFE;
    border-radius: 10px;
  }
`;

export const ConsoleArea = styled.div`
  padding: 30px 62px 47px;
  .pt-20 {
    padding-top: 20px;
  }
  &.status-pending {
    padding: 30px 68px 59px;
    .dot {
      width: 16px;
      height: 16px;
      background: #A0CDFE;
      border-radius: 50%;
      &.active {
        background: #007AFF;
      }
    }
    .message {
      font-family: Poppins;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      padding-left: 19px;
      color: #999999;
      word-break: break-all;
      &.active {
        color: #232325;
      }
    }
  }
  &.status-success {
    .message {
      padding: 22px 32px 27px;
      background: #F0FFEB;
      border: 1.5px solid #ADFEA0;
      border-radius: 10px;
    }
  }
  &.status-failed {
    .message {
      padding: 22px 32px;
      background: #FFF6F5;
      border: 1.5px solid #FF453A;
      border-radius: 10px;
    }
  }
`;


export const Review = styled.div`
  width: 367px;
  min-width: 367px;
  height: fit-content;
  background: #FFFFFF;
  border: 1px solid #A0CDFE;
  border-radius: 18px;
  padding-left: 31px;
  padding: 0 30px 42px 31px;
  box-sizing: border-box;
  .header {
    width: 100%;
    height: 60px;
  }
  .row {
    font-family: Poppins;
    padding-top: 10px;
    font-size: 12px;
    line-height: 18px;
    &:first-of-type {
      padding-top: 16px;
    }
    .label {
      float: left;
      width: 50%;
      text-align: left;
      font-weight: 500;
      color: #007AFF;
    }
    .value {
      text-align: right;
      font-weight: 400;
      color: #232325;
      word-break: break-all;
    }
    .logo-wrapper {
      text-align: right;
      .logo {
        width: 32px;
        height: 32px;
        border: 1px solid #DEDEE0;
    }
    }
  }
`;
