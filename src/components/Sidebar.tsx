import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import AuthBtns from "./AuthBtns";
import { ModeToggle } from "./ModeToggle";
import SideNavMenu from "./SideNavMenu";

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
          <SheetTitle>SITE Learn</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col justify-center items-center gap-2">
          <SideNavMenu />
          <AuthBtns />
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
