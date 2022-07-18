import { atom } from "jotai";

interface validSides {
    side: 'top' | 'bottom' | 'right' | 'left'
}

export const activeMoonAtom = atom<any>(null)

