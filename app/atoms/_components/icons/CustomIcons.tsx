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
  gmail: (props: SvgProps) => (
    <svg fill="none" viewBox="0 0 92 92" xmlns="http://www.w3.org/2000/svg" {...props}><rect fill="#fff" height="90.5618" rx="19.5" stroke="#c4cfe3" width="90.5618" x=".5" y=".5"/><path d="m22.9499 66.1963h8.4827v-20.6008l-12.1181-9.0887v26.0541c0 2.0116 1.6298 3.6354 3.6354 3.6354z" fill="#4285f4"/><path d="m60.5156 66.1963h8.4827c2.0117 0 3.6355-1.6299 3.6355-3.6354v-26.0541l-12.1182 9.0887" fill="#34a853"/><path d="m60.5156 29.8421v15.7536l12.1182-9.0887v-4.8472c0-4.4959-5.1321-7.0589-8.7251-4.3626" fill="#fbbc04"/><path d="m31.4336 45.5954v-15.7536l14.5418 10.9063 14.5418-10.9063v15.7536l-14.5418 10.9064" fill="#ea4335"/><path d="m19.3145 31.6598v4.8472l12.1181 9.0887v-15.7536l-3.3931-2.5449c-3.5991-2.6963-8.725-.1333-8.725 4.3626z" fill="#c5221f"/></svg>
  ),
  flameLogo: (props: SvgProps) => (
    <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" {...props}><path d="m323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97-27.26-37.55-61.06-75.64-99.34-111.17-98.26 91.17-168 209.96-168 281.6 0 127.25 100.29 230.4 224 230.4s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65c-21.66 15.16-48.37 24.15-77.23 24.15-72.15 0-130.86-47.74-130.86-125.25 0-38.61 24.31-72.63 72.79-130.75 6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97 27.35 52.19 15.81 118.97-33.43 153.42z"/></svg>
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
