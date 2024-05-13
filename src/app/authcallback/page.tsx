import { api } from "@/trpc/server";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AuthCallback() {
  const user = await currentUser();

  if (user) {
    const res = await api.auth.syncUserToDB({
      authId: user.id,
      imageUrl: user.imageUrl,
      role: "USER",
      userName: user.username || "",
    });

    if (!res.id) return redirect("/error");

    if (res.id) return redirect("/home");
  }

  return redirect("/home");
}
