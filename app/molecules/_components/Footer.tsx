"use client";

import { Section } from "@/app/atoms/_components/commons/Section";

export const Footer = () => {
  return (
    <footer className="mt-auto">
      <Section className="py-8">
        <p className="text-muted-foreground text-xs text-center">
          © {new Date().getFullYear()} Maïssoum Aboudrare. All right reserved.
        </p>
      </Section>
    </footer>
  );
};
