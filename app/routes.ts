import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route
} from "@react-router/dev/routes";

export default [
  // Public routes - login and register
  // Root route redirects to auth/login
  index("routes/root-index.tsx"),
  ...prefix("auth", [
    layout("routes/auth/layout.tsx", [
      index("routes/auth/login.tsx"),
      route("register", "routes/auth/registration.tsx")
    ])
  ]),

  // Protected routes - require authentication
  ...prefix("dashboard", [
    layout("routes/dashboard/layout.tsx", [
      index("routes/dashboard/index.tsx")
      // Add more dashboard routes here
    ])
  ]),

  // Error and not found routes
  route("*", "routes/not-found.tsx"),
  route("error", "routes/error.tsx")
] satisfies RouteConfig;
