import { syncUserPostBodyType } from "@/zod/schema";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AuthCallback() {
  const user = await currentUser();
  
  if (user) {
    const bodyToPost: syncUserPostBodyType = {
      authId: user.id,
      imageUrl: user.imageUrl,
      role: "USER",
      userName: user.username,
    };
    const res = await fetch("api/sync-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyToPost),
    });

    const resJson = res.json();
    console.log(resJson);
  }

  redirect("/home");
}
