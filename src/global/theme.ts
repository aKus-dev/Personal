import { atomWithStorage } from 'jotai/utils';

type ValidThemes = 'light' | 'dark'

const isLight = window.matchMedia("(prefers-color-scheme: light)").matches
const preferedTheme = isLight ? 'light' : 'dark';

export const themeAtom = atomWithStorage<ValidThemes>('theme', preferedTheme)