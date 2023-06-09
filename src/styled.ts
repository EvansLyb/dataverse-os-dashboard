import styled, { createGlobalStyle } from "styled-components";
import Poppins from '@/assets/fonts/Poppins/Poppins.ttf';
import PoppinsMedium from '@/assets/fonts/Poppins/Poppins-Medium.ttf';
import PoppinsSemiBold from '@/assets/fonts/Poppins/Poppins-SemiBold.woff2';
import PoppinsBold from '@/assets/fonts/Poppins/Poppins-Bold.ttf';
import PoppinsExtraBold from '@/assets/fonts/Poppins/Poppins-ExtraBold.woff2';
import LatoRegular from '@/assets/fonts/Lato/Lato-Regular.ttf';
import LatoMedium from '@/assets/fonts/Lato/Lato-Medium.ttf';
import LatoSemiBold from '@/assets/fonts/Lato/Lato-SemiBold.ttf';
import LatoBold from '@/assets/fonts/Lato/Lato-Bold.ttf';
import LatoExtraBold from '@/assets/fonts/Lato/Lato-ExtraBold.ttf';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @font-face {
    font-family: Lato-Regular;
    font-style: normal;
    src: url(${LatoRegular});
  }
  @font-face {
    font-family: Lato-Medium;
    font-style: normal;
    src: url(${LatoMedium});
  }
  @font-face {
    font-family: Lato-SemiBold;
    font-style: normal;
    src: url(${LatoSemiBold});
  }
  @font-face {
    font-family: Lato-Bold;
    font-style: normal;
    src: url(${LatoBold});
  }
  @font-face {
    font-family: Lato-ExtraBold;
    font-style: normal;
    src: url(${LatoExtraBold});
  }
  @font-face {
    font-family: Poppins;
    font-style: normal;
    src: url(${Poppins});
  }

  @font-face {
    font-family: Poppins-Medium;
    font-style: normal;
    src: url(${PoppinsMedium});
  }

  @font-face {
    font-family: Poppins-SemiBold;
    font-style: normal;
    src: url(${PoppinsSemiBold});
  }

  @font-face {
    font-family: Poppins-Bold;
    font-style: normal;
    src: url(${PoppinsBold});
  }

  @font-face {
    font-family: Poppins-ExtraBold;
    font-style: normal;
    src: url(${PoppinsExtraBold});
  }
`

export const Frame = styled.div`
  max-width: 100%;
  min-height: 100vh;
  margin: 0;
  background: #F6F9FD;
`;

export const Flex = styled.div`
  display: flex;
  &.items-center {
    align-items: center;
  }
  &.item-start {
    align-items: flex-start;
  }
  &.justify-center {
    justify-content: center;
  }
  &.justify-between {
    justify-content: space-between;
  }
  &.justify-around {
    justify-content: space-around;
  }
  &.justify-start {
    justify-content: flex-start;
  }
  &.justify-end {
    justify-content: flex-end;
  }
`;

export const FlexCentered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
