/* eslint-disable react/no-unescaped-entities */
"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { CustomIcon } from "./icons/CustomIcons";
import { CharactersSelect } from "./forms/CharactersSelect";
import { PositionsCheck } from "./forms/PositionsCheck";
import { ComboArea } from "./forms/ComboArea";
import { ComboPreview } from "./forms/ComboPreview";


export function AddCombo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="size-8 p-0">
          <CustomIcon
            className="inline text-foreground"
            name="addCombo"
            size={24}
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Add your best Combo{" "}
            <span className="inline-flex rotate-90">🥊</span>
          </DialogTitle>
          <DialogDescription>
            Here, edit your combo inputs and set the execution conditions.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-8 py-4">
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="name" className="text-right">
              Choose the fighter's combo:
            </Label>
            <CharactersSelect />
          </div>
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="username" className="text-right">
              Select position:
            </Label>
            <PositionsCheck />
          </div>
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="username" className="text-right">
              Type your awesome combo:
            </Label>
            <ComboArea />
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                👇 Combo preview 👇
                </span>
              </div>
            </div>
            <ComboPreview/>
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button type="submit" variant={"secondary"}>Reset Preview</Button>
          <Button type="submit">Send Combo</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
