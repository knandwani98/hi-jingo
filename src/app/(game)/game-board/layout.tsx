import { Header } from "@/components/Board/Header";
import React from "react";

const GameLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default GameLayout;
