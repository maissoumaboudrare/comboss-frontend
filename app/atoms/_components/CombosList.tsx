/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Section } from "./Section";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { CustomIcon } from "./icons/CustomIcons";
import { cn, fetchAPI } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { ComboFilters } from "./ComboFilters";


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
  avatar: string;
  userID: number;
  likeCount: number;
  isFavorite: boolean;
  isLiked: boolean;
  videoURL?: string;
  createdAt: string | Date;
};

type CombosListProps = {
  characterID: number;
};

export const CombosList = ({ characterID }: CombosListProps) => {
  const { user, isAuthenticated } = useAuth();
  const [combos, setCombos] = useState<Combo[]>([]);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [filteredCombos, setFilteredCombos] = useState<Combo[]>([]);
  //const [filter, setFilter] = useState<string>("latest");
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') || 'latest';

  console.log("video", combos);

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchCombos();
    const interval = setInterval(() => {
      fetchCombos();
    }, 2000);

    return () => clearInterval(interval);
  }, [characterID, isAuthenticated]);

  useEffect(() => {
    if (!searchParams) return; 

    const applyFilter = () => {
      switch (filter) {
        case "latest":
          setFilteredCombos([...combos].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
          break;
        case "best":
          setFilteredCombos([...combos].sort((a, b) => b.likeCount - a.likeCount));
          break;
        case "added":
          setFilteredCombos(combos.filter(combo => combo.userID === user?.userID));
          break;
        case "saved":
          setFilteredCombos(combos.filter(combo => combo.isFavorite));
          break;
        default:
          setFilteredCombos(combos);
      }
    };

    applyFilter();
  }, [combos, filter, user?.userID, searchParams]);

  const handleFilterChange = (newFilter: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('filter', newFilter);
    router.push(currentUrl.toString());
  };

  const handleDeleteCombo = async (comboID: number) => {
    try {
      await fetchAPI(`/api/combos/${comboID}`, {
        method: "DELETE",
      });
      setCombos(combos.filter((combo) => combo.comboID !== comboID));
      alert("Combo deleted successfully!");
    } catch (error) {
      console.error("Error deleting combo:", error);
    }
  };

  const handleToggleLike = async (comboID: number, isLiked: boolean) => {
    try {
      const method = isLiked ? "DELETE" : "POST";
      await fetchAPI(`/api/likes/${comboID}`, { method });
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };
 
  const handleToggleFavorite = async (comboID: number, isFavorite: boolean) => {
    try {
      if (isFavorite) {
        await fetchAPI(`/api/favorites/${comboID}`, {
          method: "DELETE",
        });
      } else {
        await fetchAPI(`/api/favorites/${comboID}`, {
          method: "POST",
        });
      }
      setCombos(
        combos.map((combo) =>
          combo.comboID === comboID
            ? {
                ...combo,
                isFavorite: !combo.isFavorite,
              }
            : combo
        )
      );
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const handleOpenVideoDialog = (videoURL: string) => {
    if (videoURL) {
      setSelectedVideoUrl(videoURL);
    }
  };

  return (
    <Section className="m-0 flex flex-col pr-0 gap-4">
      <ComboFilters onFilterChange={handleFilterChange} isAuthenticated={isAuthenticated} activeFilter={filter}/>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : filteredCombos.length !== 0 ? (
        filteredCombos.map((combo) => (
          <Card
            key={combo.comboID}
            className="w-full h-auto bg-gradient-to-t from-zinc-900"
          >
            <CardHeader className="flex flex-row p-2.5 gap-3 items-center relative justify-between">
              <div className="flex gap-2">
                <Avatar className="cursor-pointer">
                  <AvatarImage className="object-cover" src={combo?.avatar} />
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
                <div className="flex flex-col !mt-0">
                  <CardTitle className="text-sm tracking-wide">
                    @{combo.username}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {combo.positions.map((pos) => `${pos}`).join(" | ")}
                  </CardDescription>
                </div>
              </div>
              <div className="flex flex-col items-center gap-0 text-xs relative mr-2">
                <CustomIcon
                  className="inline text-foreground cursor-pointer"
                  name="heart"
                  size={24}
                  fill={combo.isLiked ? "red" : "gray"}
                  onClick={() => handleToggleLike(combo.comboID, combo.isLiked)}
                />
                <span className="text-muted-foreground text-[10px] top-[45px] left-0 z-10">
                  ({combo.likeCount})
                </span>
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
                }, {} as { [key: number]: { inputName: string; inputSrc: string; lineOrder: number; inputOrder: number }[] })
              ).map((line, lineIndex, lines) => (
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
                  {lineIndex < lines.length - 1 && (
                    <Separator className="my-2" />
                  )}
                </div>
              ))}
            </CardContent>
            <Separator />
            <CardFooter className="flex p-2">
              <div className="flex items-center w-full justify-between">
                <div className="flex gap-2">
                  <Button
                    variant={combo.isFavorite ? "default" : "outline"}
                    className="size-8 p-0 group"
                    onClick={() =>
                      handleToggleFavorite(combo.comboID, combo.isFavorite)
                    }
                  >
                    <CustomIcon
                      className="inline text-foreground group-hover:fill-yellow-300"
                      name="favorite"
                      size={24}
                      fill={combo.isFavorite ? "yellow" : "gray"}
                    />
                  </Button>
                  {combo.videoURL && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="size-8 p-0 group"
                          onClick={() =>
                            handleOpenVideoDialog(
                              combo.videoURL ||
                                "https://youtu.be/EwmyxvTzHxI?si=N8EZ44jerJxfsn1W"
                            )
                          }
                        >
                          <CustomIcon
                            className="inline text-foreground group-hover:fill-white"
                            name="video"
                            size={24}
                            fill="gray"
                          />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Combo Video</DialogTitle>
                        </DialogHeader>
                        {selectedVideoUrl && (
                          <iframe
                            width="100%"
                            height="315"
                            src={selectedVideoUrl}
                            title="YouTube video player"
                            style={{ border: 0 }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        )}
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
                <div className="flex">
                  {isAuthenticated && combo.userID === user?.userID && (
                    <Button
                      variant={"ghost"}
                      onClick={() => handleDeleteCombo(combo.comboID)}
                      className="px-2"
                    >
                      <CustomIcon
                        className="inline text-foreground"
                        name="trash"
                        size={24}
                        fill="red"
                      />
                    </Button>
                  )}
                </div>
              </div>
            </CardFooter>
          </Card>
        ))
      ) : (
        <Card className="w-full h-auto bg-gradient-to-t from-zinc-900">
          <CardHeader className="flex flex-row p-2.5 gap-3 items-center relative justify-between">
            <div className="flex gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://avatars.githubusercontent.com/u/84064061?v=4" />
                <AvatarFallback>X</AvatarFallback>
              </Avatar>
              <div className="flex flex-col !mt-0">
                <CardTitle className="text-sm tracking-wide">
                  Let&apos;s add your best combo ever ! 🚀
                </CardTitle>
                <CardDescription className="text-xs">
                  Join us and enjoy !
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <Separator />
          <CardContent className="p-2.5 overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-muted">
            <img
              className="rounded-lg"
              src="/assets/others/no-combos-yet.webp"
              alt="Gif"
            />
          </CardContent>
        </Card>
      )}
    </Section>
  );
};
