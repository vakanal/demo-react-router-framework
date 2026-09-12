import { Copy, Download, Send, ThumbsDown, ThumbsUp } from "lucide-react";
import { Form } from "react-router";
import EmptyMessages from "~/chat/components/EmptyMessages";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Textarea } from "~/components/ui/textarea";
import { getClientMessages, sendMessage } from "~/faker/fake-data";
import { formatDate } from "~/lib/date-formatter";
import type { Route } from "./+types/client-chat-page";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Chat Page" },
    { name: "description", content: "Chat with our support team" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const { id } = params;

  const messages = await getClientMessages(id);

  return { messages };
}

export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();
  const message = formData.get("message");
  const newMessage = await sendMessage({
    clientId: params.id,
    content: message as string,
    createdAt: new Date(),
    sender: "agent",
  });

  return { newMessage };
}

const ClientChatPage = ({ loaderData }: Route.ComponentProps) => {
  const { messages = [] } = loaderData;

  return (
    <div className="flex-1 flex flex-col">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 && <EmptyMessages />}

          {messages.map((message) => (
            <div key={message.id} className="w-full">
              {message.sender === "client" ? (
                // Agent message - left aligned
                <div className="flex gap-2 max-w-[80%]">
                  <div className="h-8 w-8 rounded-full bg-primary shrink-0" />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">NexTalk</span>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(message.createdAt)}
                      </span>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ThumbsDown className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                // User message - right aligned
                <div className="flex flex-col items-end">
                  <div className="text-right mb-1">
                    <span className="text-sm font-medium mr-2">G5</span>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(message.createdAt)}
                    </span>
                  </div>
                  <div className="bg-black text-white p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t">
        <Form className="flex items-center gap-2" method="post">
          <Textarea
            className="min-h-11 h-11 resize-none py-3"
            placeholder="Type a message as a customer"
            id="message"
            name="message"
          />
          <Button className="h-11 px-4 flex items-center gap-2" type="submit">
            <Send className="h-4 w-4" />
            <span>Send</span>
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ClientChatPage;
