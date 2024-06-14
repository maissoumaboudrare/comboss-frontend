"use client";
import { Separator } from "@/components/ui/separator";
import { CharacterInfos } from "../atoms/_components/CharacterInfos";
import { CombosList } from "../atoms/_components/CombosList";
import { Section } from "../atoms/_components/Section";

export default function Character() {
  return (
    <main>
      <Section className="grid grid-cols-[250px_1px_1fr] gap-4">
        <div className="relative">
          <CharacterInfos />
        </div>

        <Separator orientation="vertical" />

        <CombosList />
      </Section>
    </main>
  );
}
