/* eslint-disable @next/next/no-img-element */
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

export const Characters = () => {
  return (
    <Section className="flex justify-between flex-wrap gap-10">
      <CharacterCard src="https://cdn.vox-cdn.com/thumbor/wpwihZIRimS43-JGXphVImZpNLo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg"/>
      <CharacterCard src="https://cdn.vox-cdn.com/thumbor/wpwihZIRimS43-JGXphVImZpNLo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg"/>
      <CharacterCard src="https://cdn.vox-cdn.com/thumbor/wpwihZIRimS43-JGXphVImZpNLo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg"/>
      <CharacterCard src="https://cdn.vox-cdn.com/thumbor/wpwihZIRimS43-JGXphVImZpNLo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg"/>
      <CharacterCard src="https://cdn.vox-cdn.com/thumbor/wpwihZIRimS43-JGXphVImZpNLo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg"/>
      <CharacterCard src="https://cdn.vox-cdn.com/thumbor/wpwihZIRimS43-JGXphVImZpNLo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg"/>
      <CharacterCard src="https://cdn.vox-cdn.com/thumbor/wpwihZIRimS43-JGXphVImZpNLo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg"/>
      <CharacterCard src="https://cdn.vox-cdn.com/thumbor/wpwihZIRimS43-JGXphVImZpNLo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24026116/Ken_Artwork.jpg"/>
      
    </Section>
  );
};
