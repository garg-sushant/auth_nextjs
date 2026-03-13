import Link from "next/link";

export default function HomePage() {
  return (
    <div className="card">
      <h2 className="center-text">Welcome</h2>
      <p>
        Click the button below to go to the login page and view your profile.
      </p>
      <p className="center-text">
        <Link href="/login">Log in</Link>
      </p>

    </div>
  );
}
