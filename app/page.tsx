import { Header } from "./molecules/_components/Header";
import { Hero } from "./molecules/_components/Hero";
import { Spacing } from "./atoms/_components/Spacing";
import { Characters } from "./molecules/_components/Characters";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero/>
      <Spacing size="md" />
      <Characters/>
      <Spacing size="md" />
    </main>
  );
}
