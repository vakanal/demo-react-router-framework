import { redirect } from "react-router";
import { Welcome } from "~/welcome/welcome";
import type { Route } from "./+types/home";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  return redirect("/chat");
}

export default function Home() {
  return <Welcome />;
}
