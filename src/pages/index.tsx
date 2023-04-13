import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="h-full bg-[url('/web-bg.jpg')] bg-center bg-cover">
        <Head>
          <title>Create Next App</title>
        </Head>
        <header className="flex justify-between items-center h-[90px] px-5">
          <div>hm</div>
          <div>logo</div>
          <Link
            href="#"
            className="rounded-3xl bg-white px-3 py-2 hover:bg-opacity-60"
          >
            get in touch
          </Link>
        </header>
        <main>
          <p>Placeholder for main</p>
        </main>
        <footer>
          <p>Placeholder for footer</p>
        </footer>
      </div>
    </>
  );
}
