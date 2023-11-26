import React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import BreadcrumbsV1 from "./BreadcreumbsV1";

export default function Layout() {
  return (
    <div>
      <Breadcrumbs />
      <BreadcrumbsV1 />
      <Outlet />
    </div>
  );
}
