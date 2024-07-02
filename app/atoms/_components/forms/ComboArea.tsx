/* eslint-disable @next/next/no-img-element */
import { TextAlignLeftIcon } from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type ComboAreaProps = {
  onInputAdd: (inputName: string, inputSrc: string) => void;
  onNewLineAdd: () => void;
};

//? changer l'url des inputs envoyés ?

export function ComboArea({ onInputAdd, onNewLineAdd }: ComboAreaProps) {
  const handleAddInput = (name: string, src: string) => {
    console.log(name)
    onInputAdd(name, src);
  };
  return (
    <ToggleGroup className="flex flex-wrap justify-start" type="single">

      {INPUTS_KEYS.map(({value, url, alt}, index) => (
      <ToggleGroupItem
      key={index}
        className="overflow-hidden p-2"
        value={value}
        aria-label={`Toggle ${value}`}
        onClick={() =>
          handleAddInput(value, url)
        }
      >
        <img
          className="w-6"
          src={url}
          alt={alt}
        />
      </ToggleGroupItem>
      ))}
     
      <ToggleGroupItem className="overflow-hidden p-2" value="return" aria-label="return line" onClick={onNewLineAdd}>
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
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-d.png",
  },
  {
    value: "u",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-u.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-u.png",
  },
  {
    value: "dc",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-dc.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-dc.png",
  },
  {
    value: "dl",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-dl.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-dl.png",
  },
  {
    value: "dr",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-dr.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-dr.png",
  },
  {
    value: "l",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-l.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-l.png",
  },
  {
    value: "lc",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-lc.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-lc.png",
  },
  {
    value: "r",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-r.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-r.png",
  },
  {
    value: "360",
    alt: "directions",
    src: "/assets/form/inputs/directions/key-circle.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-circle.png",
  },
  {
    value: "HK",
    alt: "kicks",
    src: "/assets/form/inputs/kicks/icon_kick_h.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/icon_kick_h.png",
  },
  {
    value: "LK",
    alt: "kicks",
    src: "/assets/form/inputs/kicks/icon_kick_l.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/icon_kick_l.png",
  },
  {
    value: "MK",
    alt: "kicks",
    src: "/assets/form/inputs/kicks/icon_kick_m.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/icon_kick_m.png",
  },
  {
    value: "K",
    alt: "kicks",
    src: "/assets/form/inputs/kicks/icon_kick.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/icon_kick.png",
  },
  {
    value: "HP",
    alt: "punches",
    src: "/assets/form/inputs/punches/icon_punch_h.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/icon_punch_h.png",
  },
  {
    value: "LP",
    alt: "punches",
    src: "/assets/form/inputs/punches/icon_punch_l.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/icon_punch_l.png",
  },
  {
    value: "MP",
    alt: "punches",
    src: "/assets/form/inputs/punches/icon_punch_m.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/icon_punch_m.png",
  },
  {
    value: "P",
    alt: "punches",
    src: "/assets/form/inputs/punches/icon_punch.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/icon_punch.png",
  },
  {
    value: "N",
    alt: "specials",
    src: "/assets/form/inputs/specials/key-nutral.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-nutral.png",
  },
  {
    value: "plus",
    alt: "specials",
    src: "/assets/form/inputs/specials/key-plus.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/key-plus.png",
  },
  {
    value: "s1",
    alt: "specials",
    src: "/assets/form/inputs/specials/s1.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/s1.png",
  },
  {
    value: "s2",
    alt: "specials",
    src: "/assets/form/inputs/specials/s2.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/s2.png",
  },
  {
    value: "s3",
    alt: "specials",
    src: "/assets/form/inputs/specials/s3.png",
    url: "https://www.streetfighter.com/6/assets/images/common/controller/s3.png",
  },
];