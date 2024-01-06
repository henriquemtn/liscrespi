import { create } from 'zustand';

interface EbookModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useEbookModal = create<EbookModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));