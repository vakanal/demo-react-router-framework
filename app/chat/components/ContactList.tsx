import { NavLink } from "react-router";
import { Button, buttonVariants } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Spinner } from "~/components/ui/spinner";
import { avatarText } from "~/lib/avatar-text";
import type { Client } from "../interfaces/chat.interface";

interface Props {
  clients: Client[];
}

const ContactList = ({ clients }: Props) => {
  return (
    <ScrollArea className="h-[calc(100vh-8.3125rem)]">
      <div className="space-y-4 p-4">
        <div className="space-y-1">
          <h3 className="px-2 text-sm font-semibold">Contacts</h3>
          <div className="space-y-1">
            {clients.map((client) => (
              <NavLink
                key={client.id}
                to={`/chat/client/${client.id}`}
                className={({ isActive }) =>
                  buttonVariants({
                    variant: `${isActive ? "secondary" : "ghost"}`,
                    className: `w-full justify-start`,
                  })
                }
              >
                {({ isPending }) => (
                  <>
                    <div className="h-6 w-6 rounded-full bg-blue-500 mr-2 shrink-0 flex items-center justify-center text-white text-xs">
                      {avatarText(client.name)}
                    </div>
                    {client.name}
                    {isPending && <Spinner data-icon="inline-start" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t mt-4">
          <h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-gray-500 mr-2 shrink-0 flex items-center justify-center text-white text-xs">
              TM
            </div>
            Thomas Miller
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <div className="h-6 w-6 rounded-full bg-red-500 mr-2 shrink-0 flex items-center justify-center text-white text-xs">
              SB
            </div>
            Sarah Brown
          </Button>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ContactList;
