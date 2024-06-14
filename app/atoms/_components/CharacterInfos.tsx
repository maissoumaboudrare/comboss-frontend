/* eslint-disable @next/next/no-img-element */
"use client"
import { Separator } from "@/components/ui/separator";
import { Section } from "./Section";

export const CharacterInfos = () => {
  return (
    <Section className="sticky top-[65px] flex flex-col gap-3 pl-0 m-0">
      <div className="flex items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight">Ken Master</h2>
          <div className="rounded-md overflow-hidden w-full">
            <img
              className="object-cover"
              src="/assets/characters/ken.png"
              alt="img"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Former US National Fighting Champ, and ex-VP of the Masters
            Foundation. Accusations of orchestrating a criminal plot have forced
            Ken to abandon his family and business and go into hiding.
          </p>
        </div>
      </div>
      <Separator className="mt-3" />
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">Lorem, ipsum dolor.</h3>
        <ul className="my-6 ml-3 list-disc text-xs text-muted-foreground [&>li]:mt-2">
          <li>Vitality: 10 000</li>
          <li>Type: STANDARD</li>
          <li>Effective range: CLOSE-RANGE</li>
          <li>Ease of use: NORMAL</li>
          <li>Nb of Combos: 20</li>
          <li>Nb of Likes: 100</li>
          <li>Nb of Lovers: 1k</li>
        </ul>
      </div>
    </Section>
  );
};
