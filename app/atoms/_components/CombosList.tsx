"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "./Section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { HeartIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { CustomIcon } from "./icons/CustomIcons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { HeartButton } from "./HeartButton";

export const CombosList = () => {
  return (
    <Section className="m-0 grid grid-rows-[50px_1fr] pr-0 gap-4">
      <div className="flex items-center justify-around">
        <button className="px-4 py-2 text-white">Latest</button>
        <button className="px-4 py-2 text-white">Oldest</button>
        <button className="px-4 py-2 text-white">Best</button>
      </div>

      <Card className="w-full h-auto">
        <CardHeader className="flex flex-row p-2.5 gap-3 items-center relative">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://avatars.githubusercontent.com/u/84064061?v=4" />
            <AvatarFallback>X</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle>@username</CardTitle>
            <CardDescription>Corner | Anti-air | Midscreen</CardDescription>
          </div>
          <div className="absolute flex items-center gap-1 right-[-1.9rem] top-[-2rem] text-xs">
            <span className="text-muted-foreground text-[10px] absolute top-[45px] left-0 z-10">
              ( 200 )
            </span>
            <HeartButton />
          </div>
          {/* <div className="absolute flex items-center gap-1 right-2 top-1.5 text-xs">
            <span className="text-muted-foreground text-[10px]">( 200 )</span>
            <HeartIcon className="h-5 w-5" /> 
            
          </div> */}
        </CardHeader>
        <Separator />
        <CardContent className="p-2.5">
          HP + LP, MP r.rb.b LP
          <Separator />
          HP + LP, MP r.rb.b LP
          <Separator />
          HP + LP, MP r.rb.b LP HP + LP, MP r.rb.b LP
          <Separator />
          HP + LP, MP r.rb.b LP
          <Separator />
          HP + LP, MP r.rb.b LP HP + LP, MP r.rb.b LP
          <Separator />
          HP + LP, MP r.rb.b LP
          <Separator />
          HP + LP, MP r.rb.b LP
        </CardContent>
        <Separator />
        <CardFooter className="flex p-2">
          <div className="flex items-center w-full justify-between">
            <div className="flex gap-2">
              <Link
                href={"/"}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-8 p-0 group"
                )}
              >
                <CustomIcon
                  className="inline text-foreground group-hover:fill-yellow-300"
                  name="favorite"
                  size={24}
                  fill="gray"
                />
              </Link>
              <Link
                href={"/"}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-8 p-0 group"
                )}
              >
                <CustomIcon
                  className="inline text-foreground group-hover:fill-white"
                  name="video"
                  size={24}
                  fill="gray"
                />
              </Link>
            </div>
            <div className="flex">
              <Link
                href={"/"}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-8 p-0"
                )}
              >
                <CustomIcon
                  className="inline text-foreground"
                  name="trash"
                  size={24}
                  fill="red"
                />
              </Link>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card className="w-full h-auto">
        <CardHeader>
          <Avatar />
          <CardTitle>Create projects</CardTitle>
          <CardDescription className="relative">
            <HeartButton />
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
      <Card className="w-full h-auto">
        <CardHeader>
          <Avatar />
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
      <Card className="w-full h-auto">
        <CardHeader>
          <Avatar />
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </Section>
  );
};
