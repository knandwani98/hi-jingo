"use client";

import { TokenRevealTable } from "@/components/Board/TokenRevealTable";

import { VAL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  BOARD_ACTIONS,
  BOARD_STATES,
  setIsGameStarted,
} from "@/slices/boardSlice";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const GameBoardPage = () => {
  const dispatch = useDispatch();

  const getRevealedToken = useSelector(BOARD_STATES.getRevealedToken);
  const getRevealedTokensData = useSelector(BOARD_STATES.getRevealedTokensData);
  const isGameStarted = useSelector(BOARD_STATES.getIsGameStarted);

  const [count, setCount] = useState<number>(VAL.TOKEN_SPEED);
  const [isGameOver, setIsGameOver] = useState(false);

  // Game Over
  useEffect(() => {
    if (getRevealedTokensData.length >= VAL.MAX_NUMBER) {
      setIsGameOver(true);
      setCount(0);
      dispatch(setIsGameStarted(false));
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

  useEffect(() => {
    if (!isGameStarted) {
      setCount(VAL.TOKEN_SPEED);
    }
  }, [isGameStarted]);

  return (
    <main className={cn("text-secondary")}>
      <section className="max-xl:flex-col flex justify-center xl:justify-between h-screen items-center">
        {/* RIGHT */}
        <div
          className={cn(
            !isGameStarted && !getRevealedToken ? "hidden" : "w-full p-4"
          )}
        >
          <TokenRevealTable />
        </div>

        {/* LEFT */}
        <section className="w-full flex flex-col justify-stretch items-center">
          {/* Game Screen */}
          <div className="flex items-center justify-center">
            <h1 className="font-bold animate-pulse text-9xl lg:text-[380px]">
              {isGameStarted || getRevealedToken ? (
                getRevealedToken === 0 ? (
                  "!"
                ) : (
                  getRevealedToken
                )
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl sm:text-7xl font-black uppercase">
                    Are you ready?
                  </span>
                </div>
              )}
            </h1>
          </div>
          {/* Countdown */}
          {(isGameStarted || !!getRevealedToken) && (
            <div className="rounded-full flex gap-2">
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
        </section>
      </section>
    </main>
  );
};

export default GameBoardPage;
