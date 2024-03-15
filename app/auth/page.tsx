import { getServerSession } from "next-auth";
import GithubButton from "../Components/GithubButton";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "../Components/SignInForm";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }
  return (
    <div>
      <h1>Please Sign In</h1>
      <p>To access the private page you must be authenticated</p>
      <div className="p-10 border w-1/2 mx-auto flex flex-col">
        <SignInForm />
        <GithubButton />
      </div>
    </div>
  );
}
