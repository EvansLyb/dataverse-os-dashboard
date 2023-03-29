import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100vw;
  min-height: calc(100vh - 55px);
  padding-bottom: 50px; // TOOD; fit design
  padding-top: 92px;
  padding-left: 144px;
  box-sizing: border-box;
`;

export const Card = styled.div`
  width: 366px;
  height: 190px;
  background: #FFF;
  box-shadow: inset 0 0 0 1px #A0CDFE;
  border-radius: 18px;
  text-align: center;
  &:hover {
    box-shadow: inset 0 0 0 1px #007AFF;
    cursor: pointer;
  }
`;

// Create
export const AppCreateContent = styled.div`
  padding-top: 47px;
  text-align: center;
`;

export const AppCreateIcon = styled.img`
  width: 50px;
  height: 56px;
`;

export const AppCreateCopy = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

// List
export const AppListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const App = styled.div`
  padding-top: 24px;
  padding-left: 28px;
  &:nth-of-type(3n + 1) {
    padding-left: 0;
  }
`;

export const AppContent = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  text-align: left;
`;

export const AppLogo = styled.img`
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 4.54546px rgba(0, 0, 0, 0.1);
  border-radius: 11px;
`;

export const AppBaseInfo = styled.div`
  padding-left: 15px;
  text-align: left;
`;

export const AppName = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #232325;
`;

export const AppWebsite = styled.div`
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  max-width: 210px;
  a {
    color: #007AFF;
    &:visited {
      color: #007AFF;
    }
  }
`;

export const AppDesc = styled.div`
  padding-top: 64px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #000;
  opacity: .4;
`;
