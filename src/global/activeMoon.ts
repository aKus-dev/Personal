import { atom } from "jotai";

interface validSides {
    side: 'top' | 'bottom' | 'right' | 'left'
}

export const activeMoonAtom = atom<any>(null)

export const noAnimateConfigAtom = atom({
    top: false,
    bottom: false,
    right: false,
    left: false
})