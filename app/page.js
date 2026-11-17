import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to this NextJS Course!</h1>
      <p><Link href="/meals">View Meals</Link></p>
      <p><Link href="/meals/share">View Meals Share</Link></p>
      <p><Link href="/community">Join the Community</Link></p>
    </main>
  );
}