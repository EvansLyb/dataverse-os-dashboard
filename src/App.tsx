import React from "react";
import Header from "@/components/Header";
import { Frame, GlobalStyle } from "./styled";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";

const AccountStatus: React.FC = () => {
  return (
    <Frame>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </Frame>
  );
};

export default AccountStatus;
