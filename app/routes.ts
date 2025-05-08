import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route
} from "@react-router/dev/routes";

export default [
  layout("routes/auth/layout.tsx", [
    index("routes/auth/login.tsx"),
    route("register", "routes/auth/registration.tsx")
  ]),
  ...prefix("dashboard", [
    layout("routes/dashboard/layout.tsx", [index("routes/dashboard/index.tsx")])
  ]),
  route("*", "routes/not-found.tsx"),
  route("error", "routes/error.tsx")
] satisfies RouteConfig;
