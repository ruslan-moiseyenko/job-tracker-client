import React from "react";
import type { Route } from "./+types/register";

export function meta({}: Route.MetaArgs) {
  return [{ title: "register" }];
}

const register = () => {
  return <div>register</div>;
};

export default register;
