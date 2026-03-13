"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";

export default function ProfileCard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (!raw) {
      router.replace("/login");
      return;
    }

    try {
      const saved = JSON.parse(raw) as User;
      setUser(saved);
    } catch {
      localStorage.removeItem("user");
      router.replace("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) {
    return <div className="card">Loading profile…</div>;
  }

  return (
    <div className="card">
      <h2 className="center-text">Your Profile</h2>
      <div className="profile">
        <img src={user.image} alt={`${user.firstName} ${user.lastName}`} />
        <div className="profile-details">
          <p >
            <strong>Name:</strong> {user.firstName} {user.lastName}
          </p>
          <p >
            <strong>Username:</strong> {user.username}
          </p>
          <p >
            <strong>Email:</strong> {user.email}
          </p>
          <br />
        </div>
      </div>

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}
