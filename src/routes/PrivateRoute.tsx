import { Route, Navigate, RouteProps, RouterProps, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { useEffect } from 'react';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
  role: 'client' | 'admin';
};

export function PrivateRoute({ isAuthenticated, authenticationPath, outlet, role }: ProtectedRouteProps) {
  const { user } = useAuth();

  const userString = user;
  const isUserAuthenticated = isAuthenticated || (userString !== null);
  const storedUser = userString ? userString : null;


  if (isUserAuthenticated && storedUser?.role === role) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
};