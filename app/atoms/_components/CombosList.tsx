/* eslint-disable @next/next/no-img-element */
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
import { cn, fetchAPI } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { HeartButton } from "./HeartButton";
import { useEffect, useState } from "react";

type Combo = {
  comboID: number;
  comboName: string;
  positions: { positionName: string }[];
  inputs: {
    inputName: string;
    inputSrc: string;
    lineOrder: number;
    inputOrder: number;
  }[];
  username: string;
};

type CombosListProps = {
  characterID: number;
};

export const CombosList = ({ characterID }: CombosListProps) => {
  const [combos, setCombos] = useState<Combo[]>([]);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const response = await fetchAPI(
          `/api/combos/character/${characterID}`,
          {
            method: "GET",
          }
        );

        setCombos(response);
      } catch (error) {
        console.error("Error fetching combos:", error);
      }
    };

    fetchCombos();
  }, [characterID]);

  console.log(combos);
  return (
    <Section className="m-0 flex flex-col pr-0 gap-4">
      <div className="flex items-center justify-around">
      <Button className="text-sm rounded-full px-6 py-4">Latest</Button>
      <Button variant={"outline"} className="text-sm rounded-full px-6 py-4">Oldest</Button>
      <Button variant={"outline"} className="text-sm rounded-full px-6 py-4">Best</Button>
      </div>

      {combos.map((combo) => (
        <Card
          key={combo.comboID}
          className="w-full h-auto bg-gradient-to-t from-zinc-900"
        >
          <CardHeader className="flex flex-row p-2.5 gap-3 items-center relative justify-between">
            <div className="flex gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://avatars.githubusercontent.com/u/84064061?v=4" />
                <AvatarFallback>X</AvatarFallback>
              </Avatar>
              <div className="flex flex-col !mt-0">
                <CardTitle className="text-sm">@{combo.username}</CardTitle>
                <CardDescription className="text-xs">
                  {combo.positions.map((pos) => `${pos}`).join(" | ")}
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-col items-center gap-0 right-[-1.9rem] top-[-2rem] text-xs">
              <CustomIcon
                className="inline text-foreground group-hover:fill-yellow-300"
                name="heart"
                size={24}
                fill="gray"
              />
              <span className="text-muted-foreground text-[10px] top-[45px] left-0 z-10">
                ({combo.inputs.length})
              </span>
              {/* <HeartButton /> */}
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="p-2.5 overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
            {Object.values(
              combo.inputs.reduce((acc, input) => {
                const lineIndex = input.lineOrder;
                if (!acc[lineIndex]) {
                  acc[lineIndex] = [];
                }
                acc[lineIndex].push(input);
                return acc;
              }, {} as { [key: number]: { inputName: string; inputSrc: string; lineOrder: number; inputOrder: number }[] }) // Removed 'lineOrder' from the type definition
            ).map((line, lineIndex) => (
              <div key={lineIndex}>
                <div className="flex space-x-2">
                  {line.map((input, inputIndex) => (
                    <img
                      key={inputIndex}
                      src={input.inputSrc}
                      alt={input.inputName}
                      className="w-4 h-4"
                    />
                  ))}
                </div>
                {lineIndex < Object.keys(combo.inputs).length - 1 && (
                  <Separator className="my-2" />
                )}
              </div>
            ))}
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
      ))}
    </Section>
  );
};
