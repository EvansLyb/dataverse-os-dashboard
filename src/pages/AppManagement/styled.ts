import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 55px 145px;
  .pt-8 {
    padding-top: 8px;
  }
  .pt-20 {
    padding-top: 20px;
  }
  .pl-25 {
    padding-left: 25px;
  }
  .pt-25 {
    padding-top: 25px;
  }
  .pt-30 {
    padding-top: 30px;
  }
`;

export const Label = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #007AFF;
  text-align: left;
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

// ====== BasicInfo ======
export const BasicInfoContent = styled.div`
  width: 761px;
  padding: 22px 64px 32px 59px;
  box-sizing: border-box;
`;

export const BasicInfoAppLogo = styled.div`
  padding-left: 34px;
  float: right;
  .label {
    font-family: Poppins;
    font-size: 12px;
    line-height: 18px;
    padding-bottom: 3px;
    padding-left: 10px;
    color: #999999;
    text-align: left;
  }
  .logo {
    width: 153px;
    height: 153px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #DEDEE0;
    border-radius: 10px;
  }
`;


// ====== CustomData ======
export const CustomDataContent = styled.div`
  width: 761px;
  padding: 20px 66px 20px 59px;
  box-sizing: border-box;
`;

export const CustomDataUploadIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-left: 18px;
  color: #232325;
  cursor: pointer;
`;

export const CustomDataDeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  padding-left: 19px;
  color: #232325;
  cursor: pointer;
`;

export const CustomDataAddIcon = styled.img`
  width: 24px;
  height: 24px;
  color: #007AFF;
  cursor: pointer;
`;

export const CustomDataFooter = styled.div`
  padding: 30px 64px 29px 563px;
  box-sizing: border-box;
`;


// ====== FileSystem ======
export const FileSystemContent = styled.div`
  width: 367px;
  padding: 22px 30px 32px 22px;
  box-sizing: border-box;
  position: relative;
`;

export const FileSystemSelectorWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 30px;
`;

export const FileSystemCreatingData = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 9px 8px 21px;
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  line-height: 18px;
  background: #007AFF;
  border-radius: 10px;
  height: 52px;
  &.collapsed {
    height: fit-content;
  }
`;

export const FileSystemFooter = styled.div`
  width: 367px;
  padding: 22px 30px 36px 30px;
  box-sizing: border-box;
`;
