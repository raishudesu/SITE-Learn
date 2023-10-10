import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";

const AvatarIcon = async () => {
  const session = await getServerSession();
  const username = session?.user?.name;

  const getFirstChar = () => {
    return username?.charAt(0);
  };
  return (
    <Avatar>
      <AvatarImage />
      <AvatarFallback>{getFirstChar()}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
