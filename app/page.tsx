"use client"
import { Hero } from "./molecules/_components/Hero";
import { Spacing } from "./atoms/_components/Spacing";
import { Characters } from "./molecules/_components/Characters";

export default function Home() {

  return (
    <main className="flex-grow">
      <Spacing size="md" />
      <Hero/>
      <Spacing size="md" />
      {/* <Button onClick={(e) => checkAuthStatus(e)}>STATUS</Button> */}
      <Characters/>
      <Spacing size="md" />
    </main>
  );
}
