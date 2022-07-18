import { useAtom } from 'jotai';

import { activeMoonAtom } from '../animations';

export const useActiveMoon = () => {
    const [activeMoon, setActiveMoon] = useAtom(activeMoonAtom)

    return {
        activeMoon,
        setActiveMoon
    }
}