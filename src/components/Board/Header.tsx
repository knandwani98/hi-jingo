"use client";

import React from "react";
import { Pause, Play } from "lucide-react";
import { BOARD_ACTIONS, BOARD_STATES } from "@/slices/boardSlice";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  const isGameStarted = useSelector(BOARD_STATES.getIsGameStarted);

  return (
    <header className="text-secondary w-full py-1 fixed z-10 bg-gradient gradient-animation">
      <div className="container flex justify-between items-center">
        <div className="flex justify-center items-center gap-20 w-full">
          <h1 className="text-xl xl:text-3xl font-semibold w-full">
            Hi-Jingo!
          </h1>
        </div>

        {/* Start Buttons */}
        <div className="relative z-10 py-1">
          {isGameStarted ? (
            <button
              className="mt-2"
              onClick={() => dispatch(BOARD_ACTIONS.setIsGameStarted(false))}
            >
              <Pause />
            </button>
          ) : (
            <button
              className="mt-2"
              onClick={() => dispatch(BOARD_ACTIONS.setIsGameStarted(true))}
            >
              <Play />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
