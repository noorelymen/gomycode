import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="p-5 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="text-red">404</h1>
        <h3 className="text-muted">Not Found Page</h3>
        <Link to="/">Go back to home page</Link>
      </div>
    </div>
  );
}
