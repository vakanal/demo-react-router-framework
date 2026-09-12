import { MessageCircleDashed } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";

const EmptyMessages = () => {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <MessageCircleDashed />
        </EmptyMedia>
        <EmptyTitle>Empty Chat</EmptyTitle>
        <EmptyDescription>Chat without messages</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

export default EmptyMessages;
