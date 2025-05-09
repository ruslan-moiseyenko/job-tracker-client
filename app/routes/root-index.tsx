import { Navigate } from "react-router";

// This component simply redirects root visits to the auth/login route
export default function RootIndex() {
  return <Navigate to="/auth" replace />;
}
