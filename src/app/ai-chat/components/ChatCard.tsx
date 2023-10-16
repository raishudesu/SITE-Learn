import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChatCard = ({ content, sender }: { content: string; sender: string }) => {
  const checkSender = (sender: string) => {
    if (sender === "user") return "You";
    return "AI";
  };
  return (
    <Card className="max-w-screen-sm">
      <CardHeader>
        <CardTitle className="text-lg">{checkSender(sender)}</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2 text-muted-foreground text-md">
        {content}
      </CardContent>
    </Card>
  );
};

export default ChatCard;
