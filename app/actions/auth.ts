"use server";

import { signOut } from "@workos-inc/authkit-nextjs";

export const signOutHandler = async () => await signOut();
