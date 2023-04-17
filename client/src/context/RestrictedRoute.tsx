import { ChildrenProps } from "@/types/src/shared/children.types";
import Cookies from "js-cookie";
import { Navigate } from "react-router";

export default function RestrictedRoute({ children }: ChildrenProps) {
  // Needs to be changed for UserId Context
  const user = Cookies.get("githubToken");

  if (user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
