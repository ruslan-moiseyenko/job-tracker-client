import {
  type RouteConfig,
  index,
  layout,
  route
} from "@react-router/dev/routes";

export default [
  layout("routes/auth/layout.tsx", [
    index("routes/auth/login.tsx"),
    route("register", "routes/auth/registration.tsx")
  ])
] satisfies RouteConfig;
