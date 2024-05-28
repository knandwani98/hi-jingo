import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, PenTool } from "lucide-react";
import React, { useState } from "react";

export const TicketHeader = () => {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  return (
    <div className="flex items-center justify-between w-full gap-4">
      <div className="flex items-center justify-start gap-4 w-full">
        <Label
          className="font-black italic uppercase text-3xl text-secondary"
          htmlFor="name"
        >
          name:
        </Label>
        <div className="w-full">
          {isEditing ? (
            <Input
              className="font-black text-foreground italic uppercase text-3xl border-primary border-2"
              type="text"
              id="name"
              name={"name"}
              onChange={(e) => {
                setName(e.target.value);
              }}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  setIsEditing(false);
                }
              }}
              value={name}
              autoFocus
            />
          ) : (
            <span className="font-black italic uppercase text-3xl border-none text-secondary">
              {name}
            </span>
          )}
        </div>
      </div>

      {isEditing ? (
        <Button
          variant="primary"
          onClick={() => {
            setIsEditing(false);
          }}
          className="w-10 h-10 p-2"
        >
          <Check />
        </Button>
      ) : (
        <Button
          variant="default"
          onClick={() => setIsEditing(!isEditing)}
          className="w-10 h-10 p-2"
        >
          <PenTool />
        </Button>
      )}
    </div>
  );
};
