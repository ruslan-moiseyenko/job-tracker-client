import { Outlet } from "react-router";
import type { Route } from "./+types/layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JobTracker" },
    { name: "description", content: "Welcome JobTracker" }
  ];
}

const authLayout = () => {
  return (
    <div>
      layout for login
      <h1>Auth Layout</h1>
      <Outlet />
    </div>
  );
};

export default authLayout;
