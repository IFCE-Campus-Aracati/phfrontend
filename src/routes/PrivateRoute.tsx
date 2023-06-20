import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/auth";
interface PrivateRouteProps {
  role: "client" | "admin";
}

export function PrivateRoute({ role }: PrivateRouteProps) {
  const { user, signed } = useAuth();

  const checkUserPermission = role === user?.role;

  if (!signed) {
    return <Navigate to={"/"} />;
  }

  if (!checkUserPermission) {
    return user?.role === "admin" ? <Navigate to={"/admin/list_prints"} /> : <Navigate to={"/client/my_prints"} />;
  }

  return <Outlet />;
}
