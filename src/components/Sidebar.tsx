import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import SideNavMenu from "./SideNavMenu";
import ShowAuthBtns from "./ShowAuthBtns";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <span className="text-[#16BC25]">SITE</span> Learn
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col justify-center items-center gap-2">
          <SideNavMenu />
          <ShowAuthBtns />
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
