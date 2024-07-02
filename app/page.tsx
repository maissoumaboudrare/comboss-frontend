"use client"
import { Hero } from "./molecules/_components/Hero";
import { Spacing } from "./atoms/_components/Spacing";
import { Characters } from "./molecules/_components/Characters";
import { fetchAPI } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <main>
      <Spacing size="md" />
      <Hero/>
      <Spacing size="md" />
      {/* <Button onClick={(e) => checkAuthStatus(e)}>STATUS</Button> */}
      <Characters/>
      <Spacing size="md" />
    </main>
  );
}
