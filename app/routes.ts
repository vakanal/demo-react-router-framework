import {
  index,
  layout,
  prefix,
  type RouteConfig,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route(
    ".well-known/appspecific/com.chrome.devtools.json",
    "routes/devtools-probe.tsx",
  ),

  route("*", "routes/catch-all.tsx"),

  ...prefix("auth", [
    layout("layouts/auth-layout.tsx", [
      route("login", "routes/auth/login-page.tsx"),
      route("register", "routes/auth/register-page.tsx"),
      route("testing", "routes/auth/testing-page.tsx"),
      route("testing-args/:id/:name/:age", "routes/auth/testing-args-page.tsx"),

      // Actions
      route("logout", "auth/actions/logout.action.ts"),
    ]),
  ]),

  ...prefix("chat", [
    layout("layouts/chat-layout.tsx", [
      index("routes/chat/no-chat-selected-page.tsx"),
      route("client/:id", "routes/chat/client-chat-page.tsx"),
    ]),
  ]),

  route("products/:name", "routes/product.tsx"),
] satisfies RouteConfig;
