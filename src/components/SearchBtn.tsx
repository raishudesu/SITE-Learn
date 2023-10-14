import { Search } from "lucide-react";
import { Button } from "./ui/button";

const SearchBtn = () => {
  return (
    <Button variant={"secondary"} className="px-3 rounded-full">
      <Search />
    </Button>
  );
};

export default SearchBtn;
