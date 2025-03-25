import SignInForm from "../components/sign-in/sign-in-form";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col  gap-[32px] row-start-2 items-center sm:items-start">
        <SignInForm />
      </main>
    </div>
  );
}
