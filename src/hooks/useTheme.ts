import { useAtom } from 'jotai';

import { themeAtom } from '../global/theme';

export const useTheme = () => {
    const [theme, setTheme] = useAtom(themeAtom)

    const light = () => {
        setTheme('light')
    }

    const dark = () => {
        setTheme('dark')
    }

    return {
        theme,
        light,
        dark
    }
}