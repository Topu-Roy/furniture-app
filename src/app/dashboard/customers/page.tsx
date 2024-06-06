import React from 'react'
import { type User, columns } from "./columns"
import { DataTable } from "./data-table"
import { getAllUsersByAdminId } from '@/actions/userAction'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

async function getData(): Promise<Array<User>> {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) return redirect("/");

    const users = await getAllUsersByAdminId({ adminId: user.id });

    if (!users) return redirect("/");

    return users;
}

export default async function Customers() {
    const data = await getData()

    return (
        <div className="max-w-7xl w-[100dvw] lg:w-[80dvw] px-2 overflow-y-scroll mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
