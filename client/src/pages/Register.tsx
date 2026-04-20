import { useState } from "react";
import api from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await api.post("/api/auth/signup", { name, email, password });
      navigate("/dashboard");
    } catch (err: any) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <Card className="w-[500px] ">
        <CardContent className="p-6 space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Create Account</h2>
            <p className="text-sm text-muted-foreground">
              Sign up to get started
            </p>
          </div>
          <div className="space-y-3">
            <Input
              placeholder="Name"
              className="py-5"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
            />
            <Input
              placeholder="Email"
              className="py-5"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Input
              type="password"
              placeholder="Password"
              className="py-5"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button className="w-full py-5" onClick={handleRegister}>
            Create Account
          </Button>
          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link to="/" className="underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}