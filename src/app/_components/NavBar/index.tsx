import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import MobileMenu from "./mobileMenu";
import CartIcon from "./cartIcon";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { Search } from "lucide-react";
import ProfileIcon from "./profileIcon";
import { getUserDetailsByAuthId } from "@/actions/userAction";

export default async function NavBar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const userInfo = await getUserDetailsByAuthId({
    authId: user?.id ?? "",
  });

  return (
    <header className="fixed top-0 z-50 flex h-[5.5rem] w-[100vw] items-center justify-center bg-white px-2 shadow-md shadow-black/5">
      <div className="mx-auto flex w-[98vw] max-w-[85rem] flex-row justify-between">

        <Link href="/" className="lg:hidden">
          <Image
            src="/logo-icon.png"
            height={150}
            width={150}
            alt="furnit"
            className="h-[45px] w-auto"
          />
        </Link>

        <Link href="/" className="hidden lg:flex justify-center items-center">
          <Image
            src="/logo-text.png"
            height={150}
            width={150}
            alt="furnit"
            className="h-[30px] w-auto"
          />
        </Link>

        <div className="hidden items-center justify-center gap-4 font-semibold md:flex">
          <Link href="/">
            <Button variant={"ghost"}>Home</Button>
          </Link>

          <Link href="/shop">
            <Button variant={"ghost"}>Shop</Button>
          </Link>

          <Link href="/blog">
            <Button variant={"ghost"}>Blog</Button>
          </Link>

          <Link href="/aboutUs">
            <Button variant={"ghost"}>About Us</Button>
          </Link>

          <Link href="/team">
            <Button variant={"ghost"}>Team</Button>
          </Link>

          {userInfo?.role === "ADMIN" ? (
            <Link href="/dashboard">
              <Button variant={"ghost"}>Dashboard</Button>
            </Link>
          ) : null}
        </div>

        <div className="flex items-center justify-between gap-3">
          {/* <Button variant={"ghost"} className="p-1">
            <Search />
          </Button> */}

          {!user ? (
            <div className="flex items-center justify-center gap-3">
              <Link
                href={"/api/auth/login?post_login_redirect_url=/authcallback"}
              >
                <Button variant={"ghost"}>Sign In</Button>
              </Link>
              <Link
                href={
                  "/api/auth/register?post_login_redirect_url=/authcallback"
                }
              >
                <Button>Register</Button>
              </Link>
            </div>
          ) : (
            <>
              <CartIcon userInfo={userInfo} />

              <ProfileIcon
                firstName={user?.given_name ?? ""}
                lastName={user?.family_name ?? ""}
                userId={user.id}
              />
            </>
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
