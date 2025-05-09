import React from "react";
import { Outlet } from "react-router";
import { ProtectedRoute } from "~/components/features/auth/ProtectedRoute";
import { useAuth } from "~/hooks/useAuth";
import { DashboardHeader } from "~/components/features/dashboard/DashboardHeader";

const DashboardLayout = () => {
  // Get the auth context
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen">
        <DashboardHeader />
        <main className="flex-1 bg-background/95">
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
