import { api } from "@/trpc/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function AuthCallback() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) {
    const res = await api.auth.syncUserToDB({
      authId: user.id,
      //TODO: Add default fallback image for user
      imageUrl: user.picture || "",
      role: "USER",
      firstName: user.given_name,
      lastName: user.family_name,
      email: user.email
    });

    if (!res.id) return redirect("/error");

    if (res.id) return redirect("/home");
  }

  return redirect("/home");
}
