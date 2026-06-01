import Head from "next/head";
import Link from "next/link";
import CulturalBadge from "../components/CulturalBadge";
import LanguageToggle from "../components/LanguageToggle";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kedu ❤️ – Ndi Igbo Bu Igbo's Local Dating App</title>
        <meta
          name="description"
          content="Find love, connect culturally, and celebrate Igbo identity."
        />
      </Head>

      {/* Navigation Bar */}
      <nav className="w-full bg-pink-100 p-4 shadow-md">
        <ul className="flex justify-center space-x-6 text-pink-700 font-semibold">
          <li><Link href="/signup">Signup</Link></li>
          <li><Link href="/onboarding">Onboarding</Link></li>
          <li><Link href="/browse">Browse</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/messages">Messages</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>

      {/* Landing Content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-pink-600 mt-10">
          Welcome to Kedu ❤️
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Ndi Igbo Bu Igbo's Local Dating App
        </p>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-100 p-6 mt-10 flex flex-col items-center space-y-4">
        <CulturalBadge />
        <LanguageToggle />
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kedu – Celebrating Igbo Identity
        </p>
      </footer>
    </>
  );
}
