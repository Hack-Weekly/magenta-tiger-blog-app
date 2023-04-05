import { ChildrenProps } from "@/types/src/shared/children.types";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }: ChildrenProps) {
  const user = { test: "123" }; // REMOVE THIS WHEN AUTH WILL BE IMPLEMENTED

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}
