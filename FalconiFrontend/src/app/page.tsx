import { Metadata } from "next";
import SignInForm from "../components/sign-in/sign-in-form";

export const metadata: Metadata = {
  title: 'MidFalconi',
  description: 'Homepage do MidFalconi',
}

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col  gap-[32px] row-start-2 items-center sm:items-start">
        <SignInForm />
      </main>
    </div>
  );
}
