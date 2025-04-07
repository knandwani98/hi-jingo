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
  const getRevealedTokensData = useSelector(BOARD_STATES.getRevealedTokensData);

  const [count, setCount] = useState<number>(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  // Game Start
  useEffect(() => {
    if (isGameStarted) {
      setCount(VAL.TOKEN_SPEED);
    }
  }, [isGameStarted]);

  // Game Over
  useEffect(() => {
    if (getRevealedTokensData.length >= VAL.MAX_NUMBER) {
      setIsGameOver(true);
      setCount(0);
      setIsGameStarted(false);
    }
  }, [getRevealedTokensData]);

  // CountDown
  useEffect(() => {
    var timer: string | number | NodeJS.Timeout | undefined;

    if (isGameStarted && !isGameOver) {
      timer = setInterval(() => {
        if (count > 0) {
          setCount((prevCount) => prevCount - 1);
          const countdownSound = new Audio(`./sound/countdown.mp3`);
          countdownSound.play();
        }

        if (count === 0) {
          setCount((prevCount) => prevCount - 1);
          dispatch(BOARD_ACTIONS.getRandomToken());
        }

        if (count < 0) {
          setCount(VAL.TOKEN_SPEED);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isGameStarted, isGameOver, count]);

  // Token Voice Feedback
  useEffect(() => {
    if (getRevealedToken) {
      const randomTokenSound = new Audio(`./sound/${getRevealedToken}.mp3`);
      randomTokenSound.play();
    }

    return () => {};
  }, [getRevealedToken]);

  return (
    <main className={cn("text-secondary")}>
      <section className="max-xl:flex-col flex justify-center max-xl:gap-20 xl:justify-between h-screen items-stretch p-4">
        {/* LEFT */}
        <div
          className={cn(
            !isGameStarted && !getRevealedToken ? "hidden" : "w-full"
          )}
        >
          <TokenRevealTable />
        </div>

        {/* RIGHT */}
        <section className="bg-secondary-foreground xl:min-h-screen w-full relative">
          {/* Game Screen */}
          <div className="lg:min-h-screen flex items-center justify-center">
            <h1 className="font-bold animate-pulse text-9xl lg:text-[380px]">
              {getRevealedToken
                ? getRevealedToken
                : !isGameStarted && (
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-4xl sm:text-7xl uppercase italic font-black">
                        Are you ready?
                      </span>
                    </div>
                  )}
            </h1>
          </div>
        </section>

        {/* Additionals */}

        {/* Countdown */}
        {isGameStarted && (
          <div className="fixed bottom-16 left-16 rounded-full flex gap-2">
            {Array(VAL.TOKEN_SPEED)
              .fill("")
              .map((_, i) => {
                return (
                  <div
                    key={i}
                    className={cn(
                      "size-5 rounded-full border-2 border-primary",
                      i >= count ? "bg-primary" : ""
                    )}
                  ></div>
                );
              })}
          </div>
        )}

        {/* Start Buttons */}
        <div className="fixed bottom-10 right-10">
          {isGameStarted ? (
            <Button
              onClick={() => setIsGameStarted(false)}
              variant={"primary"}
              className="w-16 h-16 rounded-full"
            >
              <Pause />
            </Button>
          ) : (
            <Button
              onClick={() => setIsGameStarted(true)}
              variant={"primary"}
              className="w-16 h-16 rounded-full"
            >
              <Play />
            </Button>
          )}
        </div>
      </section>
    </main>
  );
};

export default GameBoardPage;
