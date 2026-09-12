import { Link } from "react-router";
import { sleep } from "~/lib/sleep";
import { SpinnerEmpty } from "~/shared/components/SpinnerEmpty";
import type { Route } from "./+types/testing-args-page";

export function meta() {
  return [
    { title: "Testing Args Page" },
    {
      property: "og:title",
      content: "Testing Args Page",
    },
    {
      name: "description",
      content:
        "This is the Testing Args Page for demonstrating route arguments and data loading.",
    },
  ];
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export async function loader({ params }: Route.LoaderArgs) {
  const { id, name, age } = params;

  console.log(
    `Server Loader: Received params - id: ${id}, name: ${name}, age: ${age}`,
  );

  return { message: "..." };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const { id, name, age } = params;

  console.log(
    `Client Loader: Received params - id: ${id}, name: ${name}, age: ${age}`,
  );

  await sleep(1500);

  return { message: "..." };
}

export function HydrateFallback() {
  return (
    <SpinnerEmpty
      title="Loading Testing Args Page..."
      description="Please wait while we load the data."
    />
  );
}

clientLoader.hydrate = true as const;

export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const matchSummary = matches.map((m) => ({
    id: m?.id,
    pathname: m?.pathname,
  }));

  return (
    <div>
      <h1 className="font-bold text-4xl">Name: {params.name}</h1>
      <h1 className="font-bold text-3xl">Age: {params.age}</h1>
      <h1 className="font-bold text-2xl">Id: {params.id}</h1>
      <hr />
      <h1>Testing Args Page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matchSummary)}</p>

      <Link
        to="/auth/testing"
        className="text-blue-500 hover:underline text-lg"
      >
        Go to Testing Page
      </Link>
    </div>
  );
}
