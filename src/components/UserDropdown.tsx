import { PenSquare, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AvatarIcon from "./Avatar";
import SignoutBtn from "./SignoutBtn";
import Link from "next/link";
import { getServerSession } from "next-auth";
import CreateBlogBtn from "@/app/blogs/components/CreateBlogBtn";

const UserDropdown = async () => {
  const session = await getServerSession();

  if (!session) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="p-0 rounded-full">
          <AvatarIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2 max-w-56">
        <DropdownMenuLabel className="text-lg">My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href={"/dashboard"} className="w-full flex items-center">
              <User className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/blogs/create"} className="w-full flex items-center">
              <PenSquare className="mr-2 h-4 w-4" />
              Create blog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/settings"} className="w-full flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
