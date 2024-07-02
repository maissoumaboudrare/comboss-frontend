"use client";
import ComboForm from "../atoms/_components/ComboFormTest";
import { Section } from "../atoms/_components/Section";

export default function Character() {
  return (
    <main>
      <Section className="grid grid-cols-[250px_1px_1fr] gap-4">
        <ComboForm/>        
      </Section>
    </main>
  );
}
