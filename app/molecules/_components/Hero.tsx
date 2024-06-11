import { Section } from "@/app/atoms/_components/Section";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-center">
      <div className="flex flex-col justify-center gap-4">
        <div className="flex justify-center">
          <span className="bg-primary rounded-full px-5 py-2 ">
            Over 3 million user on Combosss!
          </span>
        </div>
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10 mb-6">
          Welcome to the best app ever !
        </h2>
        <p className="leading-7">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente autem iure natus iusto adipisci
          voluptatem? Libero, laborum hic dolorum neque omnis tempora quo
          consequuntur cumque doloribus ad corrupti facere non?
        </p>
        <div className="flex justify-center">
          <Button className="text-sm rounded-full px-6 py-4">Join us !</Button>
        </div>
      </div>
    </Section>
  );
};
