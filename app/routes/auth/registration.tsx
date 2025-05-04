import type { Route } from "./+types/registration";
import { RegistrationCard } from "~/components/features/auth/RegistrationCard";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Registration" }];
}

const register = () => {
  return <RegistrationCard />;
};

export default register;
