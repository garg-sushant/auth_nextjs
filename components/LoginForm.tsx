"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@/types/user";

export default function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password: password.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      const user: User = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        email: data.email,
        image: data.image,
        token: data.token,
      };

      localStorage.setItem("user", JSON.stringify(user));

      router.push("/profile");
    } catch (err) {
      console.error(err);
      setError("Unable to contact the login server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2 className="center-text">Login</h2>
      <p className="center-text">Enter your credentials to continue.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="kminchelle"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="0lelplR"
          required
        />

        {error && <div className="error">{error}</div>}

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="center-text">
          Demo login: <br />
          Username: <b>emilys</b> <br />
          Password: <b>emilyspass</b>
        </p>
      </form>
    </div>
  );
}