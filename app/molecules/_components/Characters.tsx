/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { CharacterCard } from "@/app/atoms/_components/CharacterCard";
import { Section } from "@/app/atoms/_components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchAPI } from "@/lib/utils";

type Character = {
  characterID: number;
  name: string;
  thumbnail: string;
};

export const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetchAPI("/api/characters", {
          method: "GET",
        });

        setCharacters(response);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <Section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.characterID}
          id={character.characterID}
          name={character.name}
          src={character.thumbnail}
        />
      ))}
    </Section>
  );
};
