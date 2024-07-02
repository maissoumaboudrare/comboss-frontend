/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRouter } from "next/navigation";
import { fetchAPI } from "@/lib/utils";
import { ChangeEvent, useEffect, useState } from "react";
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
import { Input } from "@/components/ui/input";

type Combo = {
  characterID: number;
  comboName: string;
  positions: { positionName: string }[];
};

type InputData = {
  inputName: string;
  inputSrc: string;
};

type Input = {
  inputName: string;
  inputSrc: string;
};

type Character = {
  characterID: number;
  name: string;
  thumbnail: string;
};

export function AddCombo() {
  const router = useRouter();
  const [combo, setCombo] = useState<Combo>({
    characterID: 0,
    positions: [],
    comboName: "",
  });
  const [lines, setLines] = useState<Input[][]>([[]]);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetchAPI("/api/characters", {
        method: "GET",
      });
      setCharacters(response);
    };

    fetchCharacters();
  }, []);

  const addInputToLine = (inputName: string, inputSrc: string) => {
    const currentLineIndex = lines.length - 1;
    const currentLineLength = lines[currentLineIndex].length;
    const newInput: InputData = { inputName, inputSrc};

    const updatedLines = [...lines];
    updatedLines[currentLineIndex].push(newInput);
    setLines(updatedLines);
  };

  const addNewLine = () => {
    if (lines.length < 10) {
      setLines([...lines, []]);
    }
  };

  const handleCharacterChange = (characterID: number) => {
    setCombo({ ...combo, characterID });
  };

  const handlePositionChange = (position: string) => {
    const positionObject = { positionName: position };
    if (combo.positions.some((pos) => pos.positionName === position)) {
      setCombo({
        ...combo,
        positions: combo.positions.filter((pos) => pos.positionName !== position),
      });
    } else {
      setCombo({ ...combo, positions: [...combo.positions, positionObject] });
    }
  };


  const handleComboNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCombo({ ...combo, comboName: event.target.value });
  };

  const handleSubmitCombo = async () => {
    try {
      const comboData = {
        combo: {
          characterID: combo.characterID,
          comboName: combo.comboName,
        },
        positions: combo.positions,
        inputs: lines,
      };

      const response = await fetchAPI("/api/combos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comboData),
        credentials: "include",
      });

      alert("Combo added successfully!");
      setCombo({ characterID: 0, comboName: "", positions: [] });
      setLines([[]]);
      router.push('/');
    } catch (error) {
      console.error("Error adding combo:", error);
    }
  };

  const resetPreview = () => {
    setCombo({ characterID: 0, positions: [], comboName: combo.comboName });
    setLines([[]]);
  };

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
            <Label htmlFor="comboName" className="text-right">
              Combo Name:
            </Label>
            <Input
              placeholder="Black Mamba"
              value={combo.comboName}
              onChange={handleComboNameChange}
            />
          </div>
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="character" className="text-right">
              Choose the fighter's combo:
            </Label>
            <CharactersSelect
              characters={characters}
              onChange={handleCharacterChange}
            />
          </div>
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="position" className="text-right">
              Select position:
            </Label>
            <PositionsCheck
              selectedPositions={combo.positions}
              onChange={handlePositionChange}
            />
          </div>
          <div className="flex flex-col items-start gap-3">
            <Label htmlFor="combo" className="text-right">
              Type your awesome combo:
            </Label>
            <ComboArea onInputAdd={addInputToLine} onNewLineAdd={addNewLine} />
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
            <ComboPreview inputs={lines} />
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button type="button" variant={"secondary"} onClick={resetPreview}>
            Reset Preview
          </Button>
          <Button type="button" onClick={handleSubmitCombo}>
            Send Combo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
