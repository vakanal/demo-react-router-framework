import { Form, NavLink, useNavigation } from "react-router";
import { Spinner } from "~/components/ui/spinner";
import { sleep } from "~/lib/sleep";
import type { Route } from "./+types/testing-page";

export async function action({ request }: Route.ActionArgs) {
  await sleep(1000);

  const data = await request.formData();

  console.log("Action Data Received:", Object.fromEntries(data.entries()));

  return { ok: true };
}

export async function clientAction({
  serverAction,
  request,
}: Route.ClientActionArgs) {
  await sleep(1000);

  const formdData = await request.clone().formData();
  const data = await serverAction();

  console.log("Client Action Data Received:", data);
  console.log(
    "Client Form Data Received:",
    Object.fromEntries(formdData.entries()),
  );

  return data;
}

export async function loader() {
  console.log("Hola mundo desde el server loader - Servidor");

  return { message: "Hola mundo desde el server loader - Servidor" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  console.log("Hola mundo desde el client loader - Cliente");

  const serverData = await serverLoader();

  return {
    message: "Hola mundo desde el client loader - Cliente",
    serverData,
  };
}

export default function TestingPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const matchSummary = matches.map((m) => ({
    id: m?.id,
    pathname: m?.pathname,
  }));
  const navigation = useNavigation();
  const isPosting = navigation.state === "submitting";

  return (
    <div>
      <h1>Testing Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matchSummary)}</p>

      <NavLink
        to="/auth/testing-args/ABC-123/juan/25"
        className={({ isPending }) =>
          isPending
            ? "text-gray-500 text-lg"
            : "text-blue-500 hover:underline text-lg"
        }
      >
        {({ isPending }) => (
          <span className="inline-flex items-center gap-2">
            {isPending && <Spinner data-icon="inline-start" />}
            Go to Testing Args Page
          </span>
        )}
      </NavLink>

      <Form className="mt-4 flex gap-2" method="post">
        <input
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          name="age"
          placeholder="Enter your age"
        />
        <button
          disabled={isPosting}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
          type="submit"
        >
          {isPosting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </div>
  );
}
