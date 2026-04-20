import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "@/lib/api";

export default function ProtectedRoute({ children }: any) {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get("/api/users/me");
        setIsAuth(true);
      } catch {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <p>Loading...</p>;

  return isAuth ? children : <Navigate to="/" />;
}