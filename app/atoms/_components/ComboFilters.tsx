import { Button } from "@/components/ui/button";

type ComboFiltersProps = {
  onFilterChange: (filter: string) => void;
  isAuthenticated: boolean;
  activeFilter: string;
};

export const ComboFilters = ({
  onFilterChange,
  isAuthenticated,
  activeFilter,
}: ComboFiltersProps) => {
  return (
    <div className="flex items-center justify-around">
      <Button
        variant={activeFilter === "latest" ? "default" : "outline"}
        className={`text-sm rounded-full px-6 py-4 ${
          activeFilter === "latest" ? "bg-primary" : ""
        }`}
        onClick={() => onFilterChange("latest")}
      >
        Latest
      </Button>
      <Button
        variant={activeFilter === "best" ? "default" : "outline"}
        className={`text-sm rounded-full px-6 py-4 ${
          activeFilter === "best" ? "bg-primary" : ""
        }`}
        onClick={() => onFilterChange("best")}
      >
        Best
      </Button>
      {isAuthenticated && (
        <>
          <Button
            variant={activeFilter === "added" ? "default" : "outline"}
            className={`text-sm rounded-full px-6 py-4 ${
              activeFilter === "added" ? "bg-primary" : ""
            }`}
            onClick={() => onFilterChange("added")}
          >
            Added
          </Button>
          <Button
            variant={activeFilter === "saved" ? "default" : "outline"}
            className={`text-sm rounded-full px-6 py-4 ${
              activeFilter === "saved" ? "bg-primary" : ""
            }`}
            onClick={() => onFilterChange("saved")}
          >
            Saved
          </Button>
        </>
      )}
    </div>
  );
};

// import { Button } from "@/components/ui/button";

// type ComboFiltersProps = {
//   onFilterChange: (filter: string) => void;
//   isAuthenticated: boolean;
// };

// export const ComboFilters = ({ onFilterChange, isAuthenticated }: ComboFiltersProps) => {
//   return (
//     <div className="flex items-center justify-around">
//       <Button
//         className="text-sm rounded-full px-6 py-4"
//         onClick={() => onFilterChange("latest")}
//       >
//         Latest
//       </Button>
//       <Button
//         variant={"outline"}
//         className="text-sm rounded-full px-6 py-4"
//         onClick={() => onFilterChange("best")}
//       >
//         Best
//       </Button>
//       {isAuthenticated && (
//         <>
//           <Button
//             variant={"outline"}
//             className="text-sm rounded-full px-6 py-4"
//             onClick={() => onFilterChange("added")}
//           >
//             Added
//           </Button>
//           <Button
//             variant={"outline"}
//             className="text-sm rounded-full px-6 py-4"
//             onClick={() => onFilterChange("saved")}
//           >
//             Saved
//           </Button>
//         </>
//       )}
//     </div>
//   );
// };
