import { create } from "@/node_modules/zustand/react";

interface useStoreModalInterface {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useStoreModal = create<useStoreModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}))
