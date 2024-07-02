/* eslint-disable @next/next/no-img-element */
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image";

type Character = {
  characterID: number;
  name: string;
  thumbnail: string;
};

type CharactersSelectProps = {
  characters: Character[];
  onChange: (characterID: number) => void;
};


export function CharactersSelect({ characters, onChange }: CharactersSelectProps) {

  const handleSelectChange = (characterName: string) => {
    const selectedChar = characters.find((char) => char.name === characterName);

    if (selectedChar) {
      onChange(selectedChar?.characterID);
    }
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Your combo for whom?" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Street fighters</SelectLabel>
          {characters.map((character) => (
            <SelectItem
              className="flex"
              key={character.characterID}
              value={character.name}
            >
              <div className="flex items-center gap-2">
             

                <img className="flex inline-flex rounded-full w-6 h-6" src={character.thumbnail} alt={character.name} />
    
                <span className="flex inline-flex">{character.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

// const characters = [
//   {
//     id: 1,
//     name: "Ken Master",
//     avatar: "./assets/form/characters/ken.png",
//   },
//   {
//     id: 2,
//     name: "Cammy La Bonnasse",
//     avatar: "./assets/form/characters/cammy.png",
//   },
//   {
//     id: 3,
//     name: "Jean Pierre Dupont",
//     avatar: "./assets/form/characters/jp.png",
//   },
//   {
//     id: 4,
//     name: "Luke Le Cheater",
//     avatar: "./assets/form/characters/luke.png",
//   },
//   {
//     id: 5,
//     name: "Le GieF alias Red Cyclone",
//     avatar: "./assets/form/characters/zangief.png",
//   },
//   {
//     id: 6,
//     name: "Chunli La Daronne",
//     avatar: "./assets/form/characters/chunli.png",
//   },
//   {
//     id: 7,
//     name: "Kimbourley",
//     avatar: "./assets/form/characters/kimberly.png",
//   },
//   {
//     id: 8,
//     name: "Blanka chan",
//     avatar: "./assets/form/characters/blanka.png",
//   },
// ];

