import { ComponentPropsWithoutRef } from "react";

type SvgProps = ComponentPropsWithoutRef<"svg">;

const Icons = {
  login: (props: SvgProps) => (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m17.9105 10.7209h-3.09v-7.20003c0-1.68-.91-2.02-2.02-.76l-.8.91-6.77 7.70003c-.93 1.05-.54 1.91.86 1.91h3.09v7.2c0 1.68.91 2.02 2.02.76l.8-.91 6.77-7.7c.93-1.05.54-1.91-.86-1.91z"
        fill="#ffffff"
      />
    </svg>
  ),

  logout: (props: SvgProps) => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m256 8c-136.966 0-248 111.033-248 248s111.034 248 248 248 248-111.034 248-248-111.033-248-248-248zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637l-256.315-256.313c70.204-49.356 170.226-44.735 235.638 20.676zm-260.216 260.216c-65.448-65.448-70-165.481-20.677-235.637l256.315 256.313c-70.203 49.356-170.226 44.736-235.638-20.676z"
        fill="#ffffff"
      />
    </svg>
  ),
  addCombo: (props: SvgProps) => (
    <svg
      enable-background="new 0 0 92 92"
      viewBox="0 0 92 92"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m72.5 46.5c0 2.5-2 4.5-4.5 4.5h-18v17c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5v-17h-17c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5h17v-18c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5v18h18c2.5 0 4.5 2 4.5 4.5z"
        fill="#ffffff"
      />
    </svg>
  ),
};

type IconName = keyof typeof Icons;

export type CustomIconProps = {
  name: IconName;
  size?: number;
} & SvgProps;

export const CustomIcon = ({ name, size, ...props }: CustomIconProps) => {
  const Icon = Icons[name];

  return <Icon width={size} height={size} {...props} />;
};
