import React from "react";
import { useAuth } from "~/hooks/useAuth";
// Import from tag path to avoid SSR issues
import { gql } from "@apollo/client/core";
import * as reactHooks from "@apollo/client/react";
const { useQuery } = reactHooks;
import { Loader2 } from "lucide-react";

// Example GraphQL query that would be protected on the server
const GET_DASHBOARD_DATA = gql`
  query GetDashboardData {
    dashboardData {
      jobApplications {
        id
        position
        company
        status
        dateApplied
      }
      stats {
        totalApplications
        interviews
        offers
        rejections
      }
    }
  }
`;

const DashboardIndex = () => {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(GET_DASHBOARD_DATA);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">Error loading dashboard data: {error.message}</div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {user?.firstName || user?.email}
      </h1>

      {/* This is just a placeholder - replace with actual dashboard UI */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Your Stats</h2>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-primary/10 rounded">
              <div className="text-sm text-muted-foreground">Applications</div>
              <div className="text-2xl font-bold">
                {data?.dashboardData?.stats?.totalApplications || 0}
              </div>
            </div>
            <div className="p-2 bg-primary/10 rounded">
              <div className="text-sm text-muted-foreground">Interviews</div>
              <div className="text-2xl font-bold">
                {data?.dashboardData?.stats?.interviews || 0}
              </div>
            </div>
            <div className="p-2 bg-primary/10 rounded">
              <div className="text-sm text-muted-foreground">Offers</div>
              <div className="text-2xl font-bold">
                {data?.dashboardData?.stats?.offers || 0}
              </div>
            </div>
            <div className="p-2 bg-primary/10 rounded">
              <div className="text-sm text-muted-foreground">Rejections</div>
              <div className="text-2xl font-bold">
                {data?.dashboardData?.stats?.rejections || 0}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Applications</h2>
          {data?.dashboardData?.jobApplications?.length ? (
            <ul className="space-y-2">
              {data.dashboardData.jobApplications
                .slice(0, 5)
                .map((job: any) => (
                  <li key={job.id} className="p-2 border-b">
                    <div className="font-medium">{job.position}</div>
                    <div className="text-sm text-muted-foreground">
                      {job.company}
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs">
                        {new Date(job.dateApplied).toLocaleDateString()}
                      </span>
                      <span className="text-xs px-2 py-1 bg-primary/20 rounded-full">
                        {job.status}
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No job applications yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
