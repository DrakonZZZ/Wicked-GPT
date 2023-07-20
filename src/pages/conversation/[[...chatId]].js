import Head from "next/head";
import { Sidebar } from "src/components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Conversation</title>
      </Head>
      <main className="grid h-screen grid-cols-[360px_1fr]">
        <Sidebar />
        <section className="flex flex-col bg-gray-300">
          <div className="flex-1">Chat screen</div>
          <hr className="m-auto w-[95%]" />
          <footer className="px-12 py-8">Footer</footer>
        </section>
      </main>
    </>
  );
}
