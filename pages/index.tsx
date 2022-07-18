import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image src="/favicon.svg" width="80" height="80" alt="lol" />
        <div className="pt-4" />
        <h1 className="text-[#E8DCFF] text-5xl font-bold text-center anim-1">
          Create <span className="text-violet-300">T3</span> App
        </h1>

        <div className="pt-12 md:pt-6" />
        <code
          id="command"
          className="px-3 py-1.5 text-base text-blue-300 rounded-md cursor-pointer bg-neutral-800 hover:bg-neutral-700 transition-all duration-300 anim-2"
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
        <div className="flex gap-4 font-medium text-neutral-300 anim-2">
          <a
            href="https://github.com/t3-oss/create-t3-app"
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
            T3 Stack
          </a>
        </div>

        <div className="fixed cursor-pointer bottom-8">
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
      <div className="bg-[#E8DCFF]">
        <div className="mx-auto max-w-2xl  min-h-screen">
          <div className="p-8" />
          <h2 className="text-2xl font-medium">What is the T3 Stack?</h2>
          <div className="p-2" />
          <p>
            The "T3 Stack" is a web development stack made by{" "}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="https://twitter.com/t3dotgg"
            >
              Theo
            </a>{" "}
            focused on simplicity, modularity, and full-stack typesafety.
          </p>
          <div className="p-8" />
          <h2 className="text-2xl font-medium">
            What is this? Some kind of template?
          </h2>
          <div className="p-2" />
          <p>
            Kind of. We love all of the technologies that create-t3-app
            includes. Check out{" "}
            <a
              className="text-blue-600 hover:text-blue-400"
              href="https://init.tips"
            >
              init.tips
            </a>{" "}
            for even more info on topics such as state management and
            deployment. But we do not believe these are needed on every project.
          </p>
          <div className="p-2" />
          <p>
            So we made create-t3-app to do one thing: Simplify complex
            boilerplate around the core T3 Stack tech without compromising the
            pieces modularity. This is NOT an all-inclusive template and we
            expect you to bring your own libraries as well.
          </p>
          <div className="p-2" />
          <p>
            We are selective about the packages we have included. We don't add
            libraries that are as simple as npm install zustand: If you cut an
            issue asking us to add your preferred libraries, we will make fun of
            you.
          </p>
          <div className="p-8" />
          <h2 className="text-2xl font-medium">What's inside?</h2>
          <div className="p-2" />
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
            <a
              href="https://nextjs.org/"
              className="bg-white rounded-lg px-4 py-2 flex justify-center items-center"
            >
              <img className="h-[100px]" src="/Nextjs-logo.svg" alt="Next.js" />
            </a>
            <a
              href="https://trpc.io/"
              className="bg-white rounded-lg px-4 py-2 flex justify-center items-center"
            >
              <img className="h-[100px]" src="/trpc-logo.svg" alt="trpc" />
            </a>
            <a
              href="https://tailwindcss.com/"
              className="bg-white rounded-lg px-4 py-2 flex justify-center items-center"
            >
              <img
                className="h-[100px]"
                src="/tailwindcss-logo.svg"
                alt="tailwindcss"
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              className="bg-white rounded-lg px-4 py-2 flex justify-center items-center"
            >
              <img
                className="h-[100px]"
                src="/typescript-logo.svg"
                alt="typescript"
              />
            </a>
            <a
              href="https://www.prisma.io/"
              className="bg-white rounded-lg px-4 py-2 flex justify-center items-center"
            >
              <img className="h-[100px]" src="/prisma-logo.svg" alt="prisma" />
            </a>
            <a
              href="https://next-auth.js.org/"
              className="bg-white rounded-lg px-4 py-2 flex justify-center items-center"
            >
              <img
                className="h-[100px]"
                src="/nextauth-logo.png"
                alt="NextAuth.js"
              />
            </a>
          </div>
          <div className="p-8" />
          <h2 className="text-2xl font-medium">FAQ</h2>
          <div className="p-2" />
          <h3 className="text-lg font-medium">Can I use JavaScript?</h3>
          <p>No</p>
          <div className="p-14" />
        </div>
      </div>
    </>
  );
};

export default Home;
