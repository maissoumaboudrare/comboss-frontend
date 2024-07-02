"use client";
import { Section } from "@/app/atoms/_components/Section";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="max-w-sm text-center bg-primary rounded-full px-5 py-2 ">
          ⭐ Over 100 users on Combosss ⭐
        </div>

        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl mt-10">
          Welcome to the best app ever !
        </h2>

        <p className="leading-7 text-center">
        🔥 Combosss 🔥 is the ultimate web app for fighting game fans 🕹️, focused on Street Fighter 6. Discover, share, and vote for the best combos with an active and passionate community. Become the boss of combos!
        </p>

        <div className="flex">
          <Button className="text-sm rounded-full px-6 py-4">Join us</Button>
        </div>
      </div>
    </Section>
  );
};
