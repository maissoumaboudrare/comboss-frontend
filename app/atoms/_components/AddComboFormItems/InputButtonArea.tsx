"use client";
import { TextAlignLeftIcon } from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";

type ComboAreaProps = {
  onInputAdd: (inputName: string, inputSrc: string) => void;
  onNewLineAdd: () => void;
};

//? changer l'url des inputs envoyés ?

export function InputButtonArea({ onInputAdd, onNewLineAdd }: ComboAreaProps) {
  const handleAddInput = (name: string, src: string) => {
    onInputAdd(name, src);
  };
  return (
    <ToggleGroup className="flex flex-wrap justify-start" type="single">
      {INPUTS_KEYS.map(({ value, url, alt }, index) => (
        <ToggleGroupItem
          key={index}
          className="overflow-hidden p-2"
          value={value}
          aria-label={`Toggle ${value}`}
          onClick={() => handleAddInput(value, url)}
        >
          <Image className="w-6" src={url} alt={alt} width={24} height={24} />
        </ToggleGroupItem>
      ))}

      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="return"
        aria-label="return line"
        onClick={onNewLineAdd}
      >
        <TextAlignLeftIcon className="h-6 w-6" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

type InputsKeysProps = {
  value: string;
  alt: string;
  src: string;
  url: string;
};

const INPUTS_KEYS: InputsKeysProps[] = [
  {
    value: "d",
    alt: "direction",
    src: "/assets/form/inputs/directions/key-d.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-d.png",
  },
  {
    value: "u",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-u.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-u.png",
  },
  {
    value: "dc",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-dc.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-dc.png",
  },
  {
    value: "dl",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-dl.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-dl.png",
  },
  {
    value: "dr",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-dr.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-dr.png",
  },
  {
    value: "l",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-l.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-l.png",
  },
  {
    value: "lc",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-lc.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-lc.png",
  },
  {
    value: "r",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-r.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-r.png",
  },
  {
    value: "360",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-circle.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/directions/key-circle.png",
  },
  {
    value: "HK",
    alt: "kicks",
    src: "/assets/form/inputs/kicks/icon_kick_h.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/kicks/icon_kick_h.png",
  },
  {
    value: "LK",
    alt: "kicks",
    src: "/assets/form/inputs/kicks/icon_kick_l.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/kicks/icon_kick_l.png",
  },
  {
    value: "MK",
    alt: "kicks",
    src: "/assets/form/inputs/kicks/icon_kick_m.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/kicks/icon_kick_m.png",
  },
  {
    value: "K",
    alt: "kicks",
    src: "/assets/form/inputs/kicks/icon_kick.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/kicks/icon_kick.png",
  },
  {
    value: "HP",
    alt: "punches",
    src: "/assets/form/inputs/punches/icon_punch_h.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/punches/icon_punch_h.png",
  },
  {
    value: "LP",
    alt: "punches",
    src: "/assets/form/inputs/punches/icon_punch_l.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/punches/icon_punch_l.png",
  },
  {
    value: "MP",
    alt: "punches",
    src: "/assets/form/inputs/punches/icon_punch_m.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/punches/icon_punch_m.png",
  },
  {
    value: "P",
    alt: "punches",
    src: "/assets/form/inputs/punches/icon_punch.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/punches/icon_punch.png",
  },
  {
    value: "N",
    alt: "specials",
    src: "/assets/form/inputs/specials/key-nutral.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key-nutral.png",
  },
  {
    value: "plus",
    alt: "specials",
    src: "/assets/form/inputs/specials/key-plus.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key-plus.png",
  },
  {
    value: "s1",
    alt: "specials",
    src: "/assets/form/inputs/specials/s1.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/s1.png",
  },
  {
    value: "s2",
    alt: "specials",
    src: "/assets/form/inputs/specials/s2.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/s2.png",
  },
  {
    value: "s3",
    alt: "specials",
    src: "/assets/form/inputs/specials/s3.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/s3.png",
  },
  {
    value: "or",
    alt: "specials",
    src: "/assets/form/inputs/specials/key-or.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key-or.png",
  },
  {
    value: "DI",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_drive-impact.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_drive-impact.png",
  },
  {
    value: "DP",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_drive-parry.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_drive-parry.png",
  },
  {
    value: "cancel",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_cancel_move.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_cancel_move.png",
  },
  {
    value: "C",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_counter.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_counter.png",
  },
  {
    value: "DR",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_drive-rush.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_drive-rush.png",
  },
  {
    value: "fjump",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_foward-jump.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_foward-jump.png",
  },
  {
    value: "H",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_hold.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_hold.png",
  },
  {
    value: "jump",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_jump.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_jump.png",
  },
  {
    value: "near",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_near_opponent.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_near_opponent.png",
  },
  {
    value: "PC",
    alt: "specials",
    src: "/assets/form/inputs/specials/key_punish_counter.png",
    url: "https://raw.githubusercontent.com/maissoumaboudrare/comboss-frontend/main/public/assets/form/inputs/specials/key_punish_counter.png",
  },
];
