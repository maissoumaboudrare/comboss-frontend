/* eslint-disable @next/next/no-img-element */
// import { Textarea } from "@/components/ui/textarea";

// export function ComboArea() {
//   return (
//     <div className="grid w-full gap-1.5">
//       <Textarea placeholder="" />
//       <p className="text-sm text-muted-foreground">
//         Type: LP (light punch), MP (medium punch), HP (heavy punch), LK (light kick), MK (medium kick), HK (heavy kick), N (neutral), EX(P) (Ex punch), l | lb | b | rb | r | t (all directions, left | left bottom | etc...), 360 (360 direction), Jf (jump front or b for back), Hb (hold bottom direction), S1 (super art 1, 2 or 3), DR (drive rush), + (next move)
//       </p>
//     </div>
//   );
// }
import { TextAlignLeftIcon } from "@radix-ui/react-icons";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ComboArea() {
  return (
    <ToggleGroup className="flex flex-wrap justify-start" type="single">
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-d"
        aria-label="Toggle key-d"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/directions/key-d.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-dc"
        aria-label="Toggle key-dc"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/directions/key-dc.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-dl"
        aria-label="Toggle key-dl"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/directions/key-dl.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-dr"
        aria-label="Toggle key-dr"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/directions/key-dr.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-l"
        aria-label="Toggle key-l"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/directions/key-l.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-lc"
        aria-label="Toggle key-lc"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/directions/key-lc.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-r"
        aria-label="Toggle key-r"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/directions/key-r.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-circle"
        aria-label="Toggle key-circle"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/directions/key-circle.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_kick_h"
        aria-label="Toggle icon_kick_h"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/kicks/icon_kick_h.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_kick_l"
        aria-label="Toggle icon_kick_l"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/kicks/icon_kick_l.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_kick_m"
        aria-label="Toggle icon_kick_m"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/kicks/icon_kick_m.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_kick"
        aria-label="Toggle icon_kick"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/kicks/icon_kick.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_punch_h"
        aria-label="Toggle icon_punch_h"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/punches/icon_punch_h.png"
          alt="punches"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_punch_l"
        aria-label="Toggle icon_punch_l"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/punches/icon_punch_l.png"
          alt="punches"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_punch_m"
        aria-label="Toggle icon_punch_m"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/punches/icon_punch_m.png"
          alt="punches"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="icon_punch"
        aria-label="Toggle icon_punch"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/punches/icon_punch.png"
          alt="punches"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-nutral"
        aria-label="Toggle key-nutral"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/specials/key-nutral.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="key-plus"
        aria-label="Toggle key-plus"
      >
        <img
          className="w-6"
          src="./assets/form/inputs/specials/key-plus.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="s1"
        aria-label="Toggle s1"
      >
        <img
          className="w-10"
          src="./assets/form/inputs/specials/s1.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="s2"
        aria-label="Toggle s2"
      >
        <img
          className="w-10"
          src="./assets/form/inputs/specials/s2.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="s3"
        aria-label="Toggle s3"
      >
        <img
          className="w-10"
          src="./assets/form/inputs/specials/s3.png"
          alt="kicks"
        />
      </ToggleGroupItem>
      <ToggleGroupItem
        className="overflow-hidden p-2"
        value="return"
        aria-label="return line"
      >
        <TextAlignLeftIcon className="h-6 w-6" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
