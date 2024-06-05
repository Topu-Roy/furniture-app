import React from "react";
import { getAllCartItems } from "@/actions/cartAction";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import RenderItems from "./_components/renderItems";

export const dynamic = 'force-dynamic';

export default async function Cart() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) return redirect("/home");

    const allCartProducts = await getAllCartItems({ authId: user.id });

    if (!allCartProducts) {
        return (
            <div className="mx-auto mt-[4rem] max-w-7xl py-10">
                No products Found...
            </div>
        );
    }

    return (
        <div className="mx-auto mt-[4rem] max-w-7xl py-10">
            <RenderItems cartProducts={allCartProducts.cartProducts} />
        </div>
    );
}
