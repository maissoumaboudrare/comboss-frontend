/* eslint-disable @next/next/no-img-element */
export type CharacterProps = {
  src: string;
};
export const CharacterCard = (props: CharacterProps) => {
  return (
    <div className="space-y-3 w-[150px]">
      <div className="cursor-pointer overflow-hidden rounded-md h-[150px] relative group">
        <img
          className="transition duration-300 ease-in-out group-hover:scale-110"
          src={props.src}
          alt="rar"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-mono leading-none">Ken Master</h3>
        <p className="text-xs text-muted-foreground">Easy | Strong | Best</p>
      </div>
    </div>
  );
};
