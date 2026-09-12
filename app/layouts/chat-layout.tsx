import { LogOut, X } from "lucide-react";
import { Form, Link, Outlet, redirect } from "react-router";
import ContactList from "~/chat/components/ContactList";
import ContactInformationCard from "~/chat/components/contact-information-card/ContactInformationCard";
import { Button } from "~/components/ui/button";
import { getClient, getClients } from "~/faker/fake-data";
import { getSession } from "~/sessions.server";
import type { Route } from "./+types/chat-layout";

export async function loader({ request, params }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("userId")) {
    return redirect("/auth/login");
  }

  const userName = session.get("name");

  const clients = await getClients();

  const { id } = params;
  if (id) {
    const client = await getClient(id);

    return { client, clients, userName };
  }

  return { clients, userName };
}

const ChatLayout = ({ loaderData }: Route.ComponentProps) => {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b h-14">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <Link className="font-semibold" to="/chat">
              {loaderData.userName ?? "NexTalk"}
            </Link>
          </div>
        </div>

        <ContactList clients={loaderData.clients} />

        <Form
          className="p-4 border-t h-19 flex items-center"
          method="post"
          action="/auth/logout"
        >
          <Button
            variant="default"
            size="lg"
            className="w-full cursor-pointer"
            type="submit"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </Form>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b px-4 flex items-center justify-between">
            <div></div> {/* Empty div to maintain spacing */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Save conversation
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </header>
          <Outlet />
        </div>

        {/* Right Panel - Contact Details */}
        <div className="w-80 border-l flex flex-col">
          <div className="h-14 border-b px-4 flex items-center shrink-0">
            <h2 className="font-medium">Contact details</h2>
          </div>
          <div className="flex-1 min-h-0">
            <ContactInformationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;
