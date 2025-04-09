import { cn } from "@/lib/utils";
import { BOARD_STATES } from "@/slices/boardSlice";
import React from "react";
import { useSelector } from "react-redux";

interface TableProps {}

export const TokenRevealTable = (props: TableProps) => {
  const getRevealedTokenGrid = useSelector(BOARD_STATES.getRevealedTokenGrid);
  const getRevealedTokensData = useSelector(BOARD_STATES.getRevealedTokensData);

  return (
    <section className={cn("w-full flex items-center justify-center")}>
      <ul className="grid grid-cols-10">
        {getRevealedTokenGrid.map((token: any, i: number) => {
          return (
            <li
              className="max-xl:border xl:outline-double outline-secondary xl:outline-offset-2 text-secondary flex items-center justify-center font-bold sm:text-2xl h-8 w-8 md:h-16 md:w-16 xl:h-20 xl:w-20 aspect-square"
              key={i}
            >
              <p
                className={cn(
                  getRevealedTokensData.includes(token)
                    ? "text-secondary bg-primary w-4/5 h-4/5 aspect-square rounded-full flex justify-center items-center"
                    : "text-secondary/50"
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
