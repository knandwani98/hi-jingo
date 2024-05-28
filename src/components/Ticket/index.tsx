"use client";

import { cn, getRandomTicketNumbers } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { TicketHeader } from "./TicketHeader";
import { HiGrid } from "../Board/HiGrid";
import { useDispatch } from "react-redux";
import { VAL } from "@/lib/constants";

export const Ticket = () => {
  const boxPadding = "p-6";
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    setData(getRandomTicketNumbers(VAL.NUM_OF_GRID));
  }, []);

  return (
    <section
      style={{
        background: "url(bg/gradient.png)",
      }}
      className={cn("max-w-fit m-auto", boxPadding)}
    >
      <div className={cn("border-2 border-b-0 border-black", boxPadding)}>
        <h1 className="text-secondary font-black text-3xl uppercase text-center">
          H!jingo
        </h1>
      </div>
      <div className={cn("border-2 border-b-0 border-black", boxPadding)}>
        <TicketHeader />
      </div>
      <div className={cn("border-2 border-black", boxPadding)}>
        <HiGrid data={data} className="w-full" />
      </div>
    </section>
  );
};
