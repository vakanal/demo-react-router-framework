import { MessageCircleWarning } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "~/components/ui/empty";
import type { Route } from "./+types/no-chat-selected-page";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Chat Page" },
    { name: "description", content: "Select a chat to start messaging" },
  ];
}

const NoChatSelectedPage = () => {
  return (
    <Empty className="h-full bg-muted/30">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <MessageCircleWarning />
        </EmptyMedia>
        <EmptyTitle>No Chat Selected</EmptyTitle>
        <EmptyDescription>Select a chat from the sidebar</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
};

export default NoChatSelectedPage;
