import { create } from "zustand";
import { removeAsAdmin } from "@/actions/userAction";

type CustomerState = {
    action: "ALREADY_USER" | "MADE_USER" | "UNAUTHORIZED" | undefined;
}

type CustomerAction = {
    setAction: (action: CustomerState) => void;
    removeAdmin: ({ targetId }: { targetId: string }) => Promise<void>;
};

export type CustomerStoreType = CustomerState & CustomerAction;

export const useCustomerStore = create<CustomerStoreType>((set) => ({
    action: undefined,
    setAction: (action) => set({
        action: action.action
    }),
    removeAdmin: async ({ targetId }) => {
        const response = await removeAsAdmin({ targetId });

        if (response.action === 'UNAUTHORIZED') {
            set({ action: "UNAUTHORIZED" })
        }

        if (response.action === 'ALREADY_USER') {
            set({ action: "ALREADY_USER" })
        }

        if (response.action === 'MADE_USER') {
            set({ action: "MADE_USER" })
        }
    }
}))