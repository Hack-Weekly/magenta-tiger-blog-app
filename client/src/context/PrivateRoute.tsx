import { ChildrenProps } from "@/types/src/shared/children.types";
import Cookies from "js-cookie";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }: ChildrenProps) {
  const user = Cookies.get("githubToken");

  console.log(user);

  if (!user) {
    return <Navigate to="/enter" />;
  }

  return <>{children}</>;
}
