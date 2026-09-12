import type { Route } from "./+types/product";

export async function loader({ params }: Route.LoaderArgs) {
  const { name } = params;

  return { name: name.toUpperCase() };
}

export default function ProductPage({ loaderData }: Route.ComponentProps) {
  const { name } = loaderData;

  return <h1 className="font-bold text-2xl">{name}</h1>;
}
