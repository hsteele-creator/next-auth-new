import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import SignOutButton from "./Components/SignOutButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>Hello from the index page</h1>
      {session ? (
        <div>
          {" "}
          <h1>You are logged in</h1> <SignOutButton />{" "}
        </div>
      ) : (
        <h1>You are not logged in</h1>
      )}
    </div>
  );
}
