import Spline from "@splinetool/react-spline";
import Image from "next/image";
import Link from "next/link";
import { CheckCheck, LucideIcon } from "lucide-react";
import { ReactElement } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen h-fit flex-col items-center justify-center relative">
      <Navbar />

      <header
        id="home"
        className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden"
      >
        <div className="w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black md:text-8xl">Insightful</h1>
            <h2 className="text-md md:text-2xl">Start Your Journey Today!</h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-zinc-500">
            Insightful is an AI-powered career recommendation tool that analyzes
            your resume to provide personalized job role suggestions. Take the
            guesswork out of your job search and find the perfect fit for your
            skills and aspirations.
          </p>
          <div className="w-full flex items-center justify-center md:justify-start gap-4">
            <Link
              href="/sign-up"
              className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors"
            >
              <button className="w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors">
                Get Started
              </button>
            </Link>
            <Link href="/sign-in">
              <button className="w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10">
          <Spline
            className="w-full flex scale-[.25] sm:scale-[.35] lg:scale-[.5] items-center justify-center md:justify-start"
            scene="https://prod.spline.design/pvM5sSiYV2ivWraz/scene.splinecode"
          />
        </div>
      </header>
    </main>
  );
}
