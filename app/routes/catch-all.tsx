export async function loader() {
  return new Response("Not Found", { status: 404 });
}

export default function CatchAll() {
  return <div>404 - Página no encontrada</div>;
}
