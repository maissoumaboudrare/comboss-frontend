"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Section } from "@/app/atoms/_components/Section";
import { CustomIcon } from "@/app/atoms/_components/icons/CustomIcons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn, fetchAPI } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link";
import { AddCombo } from "@/app/atoms/_components/AddCombo";


import { useAuth } from "@/context/AuthContext";

export const Header = () => {
  const { isAuthenticated, setIsAuthenticated, checkAuthStatus } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   const checkAuthStatus = async () => {
  //     try {
  //       const response = await fetchAPI("/api/auth/status", {
  //         method: "GET",
  //       });
  //       console.log(response.isAuthenticated)
  //       setIsAuthenticated(response.isAuthenticated);
  //     } catch (error) {
  //       console.error("Failed to check authentication status:", error);
  //     }
  //   };

  //   //? token csrf 

  //   checkAuthStatus();
  //   const intervalId = setInterval(checkAuthStatus, 2 * 60 * 1000); // Check every 2 minutes

  //   return () => clearInterval(intervalId); // Clean up the interval on component unmount
  // }, []);

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
    <header className="sticky top-0 py-4 backdrop-blur-sm backdrop-grayscale z-30">
      <Section className="flex items-center">
        <Link href={"/"}>
        
        <h1 className="text-md font-bold items-center gap-1 flex">
          Combosss<span><CustomIcon size={20} fill="yellow" stroke="none" name="flameLogo" className="-rotate-90"/></span>
          </h1>
        </Link>
        <div className="flex-1 text-center">
        {isAuthenticated && <AddCombo />}
        {/* <AddCombo /> */}
        </div>
        <nav className="flex items-center gap-2">
        {!isAuthenticated ? (
            <Link
              href={"/login"}
              className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
            >
              <CustomIcon
                className="inline text-foreground"
                name="login"
                size={24}
              />
            </Link>
          ) : (
            <>
              <Button
                onClick={handleLogout}
                className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
              >
                <CustomIcon
                  className="inline text-foreground"
                  name="logout"
                  size={24}
                />
              </Button>
              <Link href={"/dashboard"}>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/84064061?v=4" />
                  <AvatarFallback>X</AvatarFallback>
                </Avatar>
              </Link>
            </>
          )}
        </nav>
      </Section>
    </header>
  );
};
