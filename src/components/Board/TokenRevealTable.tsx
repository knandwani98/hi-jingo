import { cn } from "@/lib/utils";
import { BOARD_STATES } from "@/slices/boardSlice";
import React from "react";
import { useSelector } from "react-redux";

interface TableProps {}

export const TokenRevealTable = (props: TableProps) => {
  const getRevealedTokenGrid = useSelector(BOARD_STATES.getRevealedTokenGrid);
  const getRevealedToken = useSelector(BOARD_STATES.getRevealedToken);

  console.log(getRevealedTokenGrid);

  return (
    <section
      className={cn(
        "bg-black min-h-screen w-full flex items-center justify-center"
      )}
    >
      <ul className="grid sm:grid-cols-9 grid-cols-6">
        {getRevealedTokenGrid.map((token, i) => {
          return (
            <li
              className="outline-double outline-primary outline-offset-2 text-secondary flex items-center justify-center font-bold text-2xl h-16 w-16"
              key={i}
            >
              <p
                className={cn(
                  getRevealedToken === token && "text-primary animate-pulse"
                )}
              >
                {token}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
