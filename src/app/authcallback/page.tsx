import { redirect } from "next/navigation";
import { syncUser } from "@/actions/syncUserAction";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { fallbackUserImageUrl } from "@/lib/defaults";
import { LoaderCircle } from "lucide-react";
import { Text } from "../_components/text";

export default async function AuthCallback() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return redirect('/api/auth/login?post_login_redirect_url=/authcallback')

  const response = await syncUser({
    authId: user.id,

    imageUrl: user.picture ?? fallbackUserImageUrl,
    role: "USER",
    firstName: user.given_name,
    lastName: user.family_name,
    email: user.email,
  })

  if (response.user.id) return redirect("/shop");


  return (
    <div className="mt-[5rem] py-14 px-4 mx-auto max-w-7xl min-h-[50dvh] flex flex-col gap-4 justify-center items-center">
      <Text muted className="text-center">Authenticating. Please wait a few seconds...</Text>
      <LoaderCircle className="animate-spin" />
    </div>
  )
}
