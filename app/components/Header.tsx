import Link from "next/link";
import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <div className="flex justify-between px-6">
      <h1 className="text-2xl font-bold">My Store</h1>
      <div className="flex gap-x-2">
        {!user ? (
          <Link
            href={signInUrl}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
          >
            Login
          </Link>
        ) : (
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
