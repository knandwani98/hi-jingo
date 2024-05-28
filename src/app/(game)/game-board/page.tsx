"use client";

import { TokenRevealTable } from "@/components/Board/TokenRevealTable";
import { Button } from "@/components/ui/button";
import { VAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BOARD_ACTIONS, BOARD_STATES } from "@/slices/boardSlice";
import { Pause, Play } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GameBoardPage = () => {
  const dispatch = useDispatch();

  const getRevealedToken = useSelector(BOARD_STATES.getRevealedToken);

  const [count, setCount] = useState(VAL.TOKEN_SPEED);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const countDown = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const countReset = () => {
    setCount(VAL.TOKEN_SPEED);
  };

  useEffect(() => {
    if (isGameStarted) {
      if (count === 0) {
        dispatch(BOARD_ACTIONS.getRandomToken());
        setTimeout(() => {
          countReset();
        }, 1000);
      } else {
        countDown();
      }
    } else {
      countReset();
    }
  }, [isGameStarted, count]);

  return (
    <main className="text-secondary">
      <section className="flex justify-between min-h-screen items-stretch">
        {/* LEFT */}
        <div
          className={cn(
            !isGameStarted && !getRevealedToken ? "hidden" : "w-full"
          )}
        >
          <TokenRevealTable />
        </div>

        {/* RIGHT */}
        <section className="bg-black min-h-screen w-full relative">
          {isGameStarted ? (
            <Button
              onClick={() => setIsGameStarted(false)}
              variant={"primary"}
              className="absolute top-10 right-10 w-10 h-10 p-2"
            >
              <Pause />
            </Button>
          ) : (
            <Button
              onClick={() => setIsGameStarted(true)}
              variant={"primary"}
              className="absolute top-10 right-10 w-10 h-10 p-2"
            >
              <Play />
            </Button>
          )}

          {isGameStarted && (
            <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full">
              <h2 className="text-4xl text-primary font-black animate-ping">
                {count !== 0 ? count : ""}
              </h2>
            </div>
          )}

          <div className="min-h-screen flex items-center justify-center">
            <h1
              style={{
                fontSize: "280px",
              }}
              className="font-bold animate-pulse"
            >
              {getRevealedToken
                ? getRevealedToken
                : !isGameStarted && (
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-7xl uppercase italic font-black mb-4">
                        Are you ready?
                      </span>
                      <span className="text-sm uppercase flex justify-center items-center">
                        ( Press the play button on top right corner to start the
                        game )
                      </span>
                    </div>
                  )}
            </h1>
          </div>
        </section>
      </section>
    </main>
  );
};

export default GameBoardPage;
