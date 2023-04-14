import { Tab } from '@headlessui/react';
import Head from 'next/head';
import Link from 'next/link';

const tabs = [
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'oceans',
    display: 'Oceans',
  },
  {
    key: 'forests',
    display: 'Forests',
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-full bg-[url('/web-bg.jpg')] bg-center bg-cover">
        <Head>
          <title>Create Next App</title>
        </Head>
        <header className="flex justify-between items-center h-[90px] px-5">
          <div className="">hm</div>
          <div className="">logo</div>
          <Link
            href="#"
            className="rounded-3xl bg-white px-3 py-2 hover:bg-opacity-60"
          >
            get in touch
          </Link>
        </header>
        <main className="grow">
          <div className="flex flex-col items-center h-full">
            <Tab.Group>
              <Tab.List className="flex items-center gap-12">
                {tabs.map((tab) => (
                  <Tab key={tab.key}>
                    {({ selected }) => (
                      <span
                        className={selected ? 'text-white' : 'text-stone-600'}
                      >
                        {tab.display}
                      </span>
                    )}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="h-full bg-stone-900 bg-opacity-60 max-w-[900px] w-full p-2 sm:p-4 my-6">
                <Tab.Panel>All Photos</Tab.Panel>
                <Tab.Panel>Oceans Photos</Tab.Panel>
                <Tab.Panel>Forests Photos</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </main>
        <footer className="h-[60px] flex justify-center items-center">
          <p>Placeholder for footer</p>
        </footer>
      </div>
    </>
  );
}
