import React from "react";
import ErrorPage from "~/routes/error";

const NotFound = () => {
  return (
    <ErrorPage
      status="404"
      title="Page Not Found"
      message="The requested page could not be found."
    />
  );
};

export default NotFound;
