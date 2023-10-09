import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarIcon = () => {
  return (
    <Avatar>
      <AvatarImage />
      <AvatarFallback>S</AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
