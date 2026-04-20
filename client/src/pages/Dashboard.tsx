import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await api.get("/api/users/me");
      setUser(res.data.user);
    };

    fetchUser();
  }, []);
  const logout = async () => {
    await api.post("/api/auth/logout");
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-background">
      <h1 className="text-2xl font-bold">Welcome to DekNek Dashboard</h1>
      {user && (
        <div className="mt-4">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
      <Button className="mt-4" onClick={logout}>
        Logout
      </Button>
    </div>
  );
}