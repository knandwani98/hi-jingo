import React, { SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Settings2 } from "lucide-react";

export function Settings(props: {
  countSpeed: number;
  setCountSpeed: React.Dispatch<SetStateAction<number>>;
}) {
  const { countSpeed, setCountSpeed } = props;

  return (
    <Dialog>
      {/* Trigger */}
      <DialogTrigger asChild>
        <Button variant={"primary"} className="w-10 h-10 p-2">
          <Settings2 />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="name" className="text-left">
                Countdown Speed
              </Label>
              <Label htmlFor="name" className="text-right">
                {countSpeed} seconds
              </Label>
            </div>
            <input
              onChange={(e) => setCountSpeed(Number(e.target.value))}
              type="range"
              min={1}
              max={10}
              value={countSpeed}
              step={1}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
