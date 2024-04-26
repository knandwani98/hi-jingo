"use client";

import {
  increaseCount,
  sampleActions,
  sampleState,
} from "@/slices/sample.slice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const count = useSelector(sampleState.count);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="text-center">
        <h1>Count is {count}</h1>

        <button
          className="bg-green-500 py-2 px-4 rounded-md"
          onClick={() => dispatch(sampleActions.increaseCount())}
        >
          Increment
        </button>
      </section>
    </div>
  );
}
