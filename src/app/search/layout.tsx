import NavMenu from "@/components/NavMenu";
import { ReactNode } from "react";
import SearchBar from "./components/SearchBar";

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="min-h-[80vh] flex flex-col items-center gap-6 p-3">
      <SearchBar />
      <h1 className="text-2xl font-bold text-[#16BC25]">
        Search results for ...
      </h1>
      <div>
        <NavMenu
          blogLink="/search"
          forumsLink="/search/forums"
          materialsLink="/search/materials"
        />
      </div>
      {children}
    </section>
  );
};

export default SearchLayout;
