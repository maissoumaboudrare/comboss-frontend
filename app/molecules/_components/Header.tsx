import { Section } from "@/app/atoms/_components/Section";
import { CustomIcon } from "@/app/atoms/_components/icons/CustomIcons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { AddCombo } from "@/app/atoms/_components/AddCombo";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 backdrop-blur-sm backdrop-grayscale z-30">
      <Section className="flex items-center">
        <h1 className="text-md font-bold items-center gap-1 flex">
          Combosss<span><CustomIcon size={20} fill="yellow" stroke="none" name="flameLogo" className="-rotate-90"/></span>
          </h1>
        <div className="flex-1 text-center">
          <AddCombo/>
        {/* <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <CustomIcon
              className="inline text-foreground"
              name="addCombo"
              size={24}
            />
          </Link> */}
        </div>
        <ul className="flex items-center gap-2">
          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <CustomIcon
              className="inline text-foreground"
              name="login"
              size={24}
            />
          </Link>
          <Link
            href={"/"}
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <CustomIcon
              className="inline text-foreground"
              name="logout"
              size={24}
            />
          </Link>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://avatars.githubusercontent.com/u/84064061?v=4" />
            <AvatarFallback>X</AvatarFallback>
          </Avatar>
        </ul>
      </Section>
    </header>
  );
};
