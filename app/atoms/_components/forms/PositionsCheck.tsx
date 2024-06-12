"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function PositionsCheck() {
  return (
    <div className="w-full flex flex-col gap-3 md:flex-row md:gap-3 md:justify-between">
      <div className="flex items-center gap-2">
        <Checkbox id="midscreen" />
        <label
          htmlFor="midscreen"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Midscreen
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="corner" />
        <label
          htmlFor="corner"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Corner
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="jump" />
        <label
          htmlFor="jump"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Jump
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="antiair" />
        <label
          htmlFor="antiair"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 inline-flex"
        >
          Anti-air
        </label>
      </div>
    </div>
  );
}
