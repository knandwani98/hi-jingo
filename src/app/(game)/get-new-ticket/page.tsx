"use client";

import { Ticket } from "@/components/Ticket";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const GetNewTicketPage = () => {
  const [noOfTickets, setNoOfTickets] = useState<number>(1);
  const noOfTicketsData = [1, 2];

  return (
    <>
      <div className="flex justify-center items-center gap-2 my-4 sm:-mb-8">
        {noOfTicketsData.map((ticket, i) => {
          return (
            <Button
              onClick={() => {
                setNoOfTickets(ticket);
              }}
              className={cn(
                "border border-secondary-foreground",
                ticket !== noOfTickets &&
                  "bg-secondary text-secondary-foreground",
                ticket === noOfTickets && "cursor-not-allowed"
              )}
              key={i}
            >
              {ticket}
            </Button>
          );
        })}
      </div>

      {/* TICKETS */}
      <main className="flex sm:flex-row flex-col justify-between gap-4 min-h-screen">
        <Ticket />
        {noOfTickets >= 2 && <Ticket />}
      </main>
    </>
  );
};

export default GetNewTicketPage;
