"use client";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Inter } from "next/font/google";

const DemoLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className="absolute top-4 right-4 flex gap-4 items-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <main className="min-h-screen p-4">{children}</main>
      </body>
    </html>
  );
};

export default DemoLayout;
