import { Outlet, useNavigation } from "react-router";
import type { Route } from "./+types/layout";
import { ModeToggle } from "~/components/mode-toggle";
import { PublicRoute } from "~/components/features/auth/PublicRoute";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "JobTracker" },
    { name: "description", content: "Welcome JobTracker" }
  ];
}

const AuthLayout = () => {
  const navigation = useNavigation();
  return (
    <PublicRoute>
      <div className="flex flex-col items-center justify-center h-screen min-h-screen w-full bg-[url('/app/assets/img/laptop.webp')] bg-cover bg-center">
        <div className="absolute top-5 right-5 z-10">
          <ModeToggle />
        </div>
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div
          className={`${
            navigation.state === "loading" ? "loading" : ""
          } relative z-10`}
        >
          <Outlet />
        </div>
      </div>
    </PublicRoute>
  );
};

export default AuthLayout;
