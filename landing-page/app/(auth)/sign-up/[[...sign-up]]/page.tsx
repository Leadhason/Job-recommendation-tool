import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-2 min-h-screen">
      <h1 className="text-3xl font-bold">Join Us Today! Create Your Account</h1>
      <SignUp />
    </div>
  );
}
