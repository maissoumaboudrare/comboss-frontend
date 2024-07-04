"use client";
import { useRouter } from "next/navigation";
import { Section } from "@/app/atoms/_components/Section";
import { CustomIcon } from "@/app/atoms/_components/icons/CustomIcons";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn, fetchAPI } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { AddCombo } from "@/app/atoms/_components/AddCombo";

import { useAuth } from "@/context/AuthContext";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

export const Header = () => {
  const { isAuthenticated, user, setIsAuthenticated, checkAuthStatus } =
    useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetchAPI("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsAuthenticated(false);
      router.push("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <header className="sticky top-0 mb-4 py-4 backdrop-blur-sm backdrop-grayscale z-30">
      <Section className="flex items-center">
        {/* <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <Link href={"/"}>
          <h1 className="text-md font-bold items-center gap-1 flex">
            Combosss
            <span>
              <CustomIcon
                size={20}
                fill="yellow"
                stroke="none"
                name="flameLogo"
                className="-rotate-90"
              />
            </span>
          </h1>
        </Link>
        </TooltipTrigger>
        <TooltipContent>
        <CustomIcon
                size={25}
                fill="white"
                name="home"
              />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider> */}
        <AnimatedTooltip
          trigger={
            <Link href={"/"}>
              <h1 className="text-md font-bold items-center gap-1 flex">
                Comboss
                <span>
                  <CustomIcon
                    size={20}
                    fill="yellow"
                    stroke="none"
                    name="flameLogo"
                    className="-rotate-90"
                  />
                </span>
              </h1>
            </Link>
          }
          content={
            <CustomIcon size={25} fill="white" stroke="none" name="home" />
          }
          left="left-7"
        />
        <div className="flex-1 text-center"></div>
        <nav className="flex items-center gap-2">
          {!isAuthenticated ? (
            <>
              <Link
                href={"/login"}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-8 p-0"
                )}
              >
                <CustomIcon
                  className="inline text-foreground"
                  name="login"
                  size={24}
                  fill="#fff"
                />
              </Link>
              <Link
                href={"/signin"}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-8 p-0"
                )}
              >
                <CustomIcon
                  className="inline text-foreground"
                  name="signin"
                  size={20}
                  fill="#fff"
                />
              </Link>
            </>
          ) : (
            <>
              <AddCombo />
              <AnimatedTooltip
                trigger={
                  <Link href={"/dashboard"}>
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={
                          user?.avatar ||
                          "https://avatars.githubusercontent.com/u/84064061?v=4"
                        }
                        className="object-cover"
                      />
                      <AvatarFallback>{user?.pseudo}</AvatarFallback>
                    </Avatar>
                  </Link>
                }
                content={<p>Dashboard</p>}
                left="-left-9"
              />

              <Button
                onClick={handleLogout}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-8 p-0"
                )}
              >
                <CustomIcon
                  className="inline text-foreground"
                  name="logout"
                  size={24}
                />
              </Button>
            </>
          )}
        </nav>
      </Section>
    </header>
  );
};
