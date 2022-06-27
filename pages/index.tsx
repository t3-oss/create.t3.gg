import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create t3 App</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[#E8DCFF] text-5xl font-bold text-center">
          Create t3 App
        </h1>

        <div className="pt-12 md:pt-6" />
        <code
          id="command"
          className="px-3 py-1.5 text-base text-blue-300 rounded-md cursor-pointer bg-neutral-800 hover:bg-neutral-700 transition-all duration-300"
          onClick={() => {
            navigator.clipboard.writeText("npx create-t3-app@latest");

            toast.success("Copied", {
              style: {
                background: "#262626",
                color: "#E8DCFF",
              },
              iconTheme: {
                primary: "#E8DCFF",
                secondary: "#262626",
              },
            });
          }}
        >
          npx create-t3-app@latest
        </code>

        <div className="mt-4" />
        <div className="flex gap-4 font-medium text-neutral-300">
          <a
            href="https://github.com/nexxeln/create-t3-app"
            rel="noreferrer"
            target="_blank"
            className="px-3 py-1 transition-all duration-200 rounded-md hover:bg-neutral-800"
          >
            GitHub
          </a>
          <a
            href="https://init.tips"
            rel="noreferrer"
            target="_blank"
            className="px-3 py-1 transition-all duration-200 rounded-md hover:bg-neutral-800"
          >
            t3 Stack
          </a>
        </div>

        <div className="mt-6" />
        <div className="cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://vercel.com?utm_source=t3-oss&utm_campaign=oss"
          >
            <Image
              src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
              alt="Powered by Vercel"
              width="212"
              height="44"
            />
          </a>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Home;
