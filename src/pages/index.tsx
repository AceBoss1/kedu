import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kedu ❤️ – Ndi Igbo Bu Igbo's Local Dating App</title>
        <meta name="description" content="Find love, connect culturally, and celebrate Igbo identity." />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-4xl font-bold text-pink-600">Welcome to Kedu ❤️</h1>
        <p className="mt-4 text-lg text-gray-700">
          Ndi Igbo Bu Igbo's Local Dating App
        </p>
      </main>
    </>
  );
}
