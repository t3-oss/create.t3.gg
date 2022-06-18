import type { NextPage } from "next";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create t3 App</title>
        <meta name="robots" content="follow, index" />
        <meta
          name="description"
          content="Scaffold a starter project using the t3 stack"
        />
        <meta property="og:site_name" content="Create t3 App" />
        <meta
          property="og:description"
          content="Scaffold a starter project using the t3 stack"
        />
        <meta property="og:image" content="/banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#E8DCFF" />
        <meta name="twitter:title" content="Create t3 App" />
        <meta
          name="twitter:description"
          content="Scaffold a starter project using the t3 stack"
        />
        <meta name="twitter:image" content="/banner.png" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-[#E8DCFF] text-5xl font-bold text-center">
          Create t3 App
        </h1>

        <div className="pt-12 md:pt-6" />
        <code
          id="command"
          className="px-2 py-1 text-base text-blue-300 rounded-md cursor-pointer bg-neutral-800"
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
            target="_blank"
            className="p-1 transition-all duration-200 rounded-md hover:bg-neutral-800"
          >
            GitHub
          </a>
          <a
            href="https://init.tips"
            target="_blank"
            className="p-1 transition-all duration-200 rounded-md hover:bg-neutral-800"
          >
            t3 Stack
          </a>
        </div>

        <Toaster />
      </div>
    </>
  );
};

export default Home;
