/* eslint-disable @next/next/no-img-element */
"use client"
import { Separator } from "@/components/ui/separator";
import { Section } from "./Section";

type Character = {
  characterID: number;
  name: string;
  avatar: string;
  story: string;

  vitality: number;
  type: string;
  effectiveRange: string;
  easeOfUse: string;
  numberOfCombos: number;
  numberOfLikes: number;
  numberOfLovers: number;
};


export const CharacterInfos = ({ character }: { character: Character }) => {
  return (
    <Section className="sticky top-[65px] flex flex-col gap-3 pl-0 m-0">
      <div className="flex items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Ken Master</h2>
          <div className="rounded-md overflow-hidden w-full">
          <img
              className="object-cover"
              src={character.avatar}
              alt={character.name}
            />
          </div>
          <p className="text-xs text-muted-foreground">
            {character.story}
          </p>
        </div>
      </div>
      <Separator className="mt-3" />
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">Lorem, ipsum dolor.</h3>
        <ul className="my-6 ml-3 list-disc text-xs text-muted-foreground [&>li]:mt-2">
        <li>Vitality: {character.vitality}</li>
          <li>Type: {character.type}</li>
          <li>Effective range: {character.effectiveRange}</li>
          <li>Ease of use: {character.easeOfUse}</li>
          <li>Nb of Combos: {character.numberOfCombos}</li>
          <li>Nb of Likes: {character.numberOfLikes}</li>
          <li>Nb of Lovers: {character.numberOfLovers}</li>
        </ul>
      </div>
    </Section>
  );
};
