import { Separator } from "@/components/ui/separator";
import { CharacterInfos } from "@/app/atoms/_components/CharacterInfos";
import { CombosList } from "@/app/atoms/_components/CombosList";
import { Section } from "@/app/atoms/_components/Section";
import { fetchAPI } from "@/lib/utils";

type Character = {
  characterID: number;
  name: string;
  avatar: string;
  story: string;

  vitality: number;
  type: string;
  effectiveRange: string;
  easeOfUse: string;
  numberOfCombos: number;
  numberOfLikes: number;
  numberOfLovers: number;
};

const Character = async ({ params }: { params: { id: string } }) => {
  const fetchCharacter = async (id: number): Promise<Character> => {
    return await fetchAPI(`/api/characters/${id}`, {
      method: "GET",
      cache: "no-store",
    });
  };

  try {
    const character = await fetchCharacter(Number(params.id));
    console.log(character);

    return (
      <main>
        <Section className="grid grid-cols-[250px_1px_1fr] gap-4">
          <div className="relative">
            <CharacterInfos character={character} />
          </div>

          <Separator orientation="vertical" />

          <CombosList characterID={character.characterID} />
        </Section>
      </main>
    );
  } catch (error) {
    console.error("Error rendering character page:", error);
    return <div>Error loading character data. Please try again later.</div>;
  }
};

export default Character;
