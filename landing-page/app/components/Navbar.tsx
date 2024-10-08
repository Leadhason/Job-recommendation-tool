import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center">
      <div className="max-w-7xl w-full flex items-center justify-between p-4">
        <Link href="/">
          <h6 className="font-bold">Insightful</h6>
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href="/sign-in"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-fuchsia-500 transition-colors text-xs sm:text-base"
              href="/sign-up"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
