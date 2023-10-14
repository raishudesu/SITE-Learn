import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-screen-sm flex gap-2">
      <Input placeholder="Search by tags" />
      <Button variant={"secondary"} className="px-3 rounded-full">
        <Search />
      </Button>
    </div>
  );
};

export default SearchBar;
