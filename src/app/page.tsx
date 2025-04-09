"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  return permanentRedirect("/game-board");

  return (
    <>
      {/* <header className="py-4 px-8"></header> */}
      <main className="flex flex-col items-center justify-center min-h-screen">
        <header className="mb-4">
          <Link
            href={"/"}
            className="uppercase font-black w-10 bg-primary rounded-md text-primary-foreground px-2 py-1"
          >
            hi!jingo
          </Link>
        </header>

        <section className="bg-gray-100 gap-4 p-8 rounded-lg min-h-60 flex items-center justify-center flex-col w-fit">
          <Link className="w-full" href={"/get-new-ticket"}>
            <Button className="w-full">Get New Ticket</Button>
          </Link>

          <Link className="w-full" href={"/game-board"}>
            <Button variant={"primary"} className="w-full">
              Start Game
            </Button>
          </Link>
        </section>
      </main>
    </>
  );
}
