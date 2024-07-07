import Link from "next/link";
import { getSignInUrl, getUser } from "@workos-inc/authkit-nextjs";

import UserDropdown from "./UserDropdown";
import UserCart from "./UserCart";
import UserWishLists from "./UserWishlists";

export default async function Header() {
  const { user } = await getUser();
  const signInUrl = await getSignInUrl();

  return (
    <div className="flex justify-between px-6">
      <h1 className="text-2xl font-bold">My Store</h1>
      <div>
        {!user ? (
          <Link
            href={signInUrl}
            className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
          >
            Login
          </Link>
        ) : (
          <div className="flex gap-x-6">
            <div className="flex gap-x-2">
              <UserCart />
              <UserWishLists />
            </div>
            <UserDropdown user={user} />
          </div>
        )}
      </div>
    </div>
  );
}
