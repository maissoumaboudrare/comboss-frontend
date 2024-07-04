"use client";
import { Section } from "@/app/atoms/_components/Section";
import { CustomIcon } from "@/app/atoms/_components/icons/CustomIcons";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="max-w-sm text-center bg-primary rounded-full px-5 py-2 ">
          <span className="animate-stars-spin-slow inline-block">
            ⭐
          </span>{" "}
          Over 100 users on Combosss{" "}
          <span className="animate-stars-spin-slow inline-block">
            ⭐
          </span>
        </div>

        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mt-10">
          Welcome to the best app ever !
        </h2>

        <p className="leading-7 text-center">
          Comboss 🔥 is the ultimate web app for fighting game fans 🕹️, focused
          on Street Fighter 6. Discover, share, and vote for the best combos
          with an active and passionate community. Become the boss of combos!
        </p>

        <div className="flex relative">
        
        <Link
                href={"/signin"}
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "text-sm rounded-full px-6 py-4 z-10"
                )}
              >
          Join us <CustomIcon
                  className="inline-block text-foreground ml-2"
                  name="signin"
                  size={20}
                  fill="#fff"
                /></Link>
                <span className="animate-ping absolute inline-flex top-[12%] left-[15%] h-[75%] w-[87px] rounded-full bg-primary opacity-75 z-0"></span>
        </div>
      </div>
    </Section>
  );
};
