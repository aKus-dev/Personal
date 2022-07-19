import { useAtom } from 'jotai';

import { activeMoonAtom } from '../global';

export const useActiveMoon = () => {
    const [activeMoon, setActiveMoon] = useAtom(activeMoonAtom)

    return {
        activeMoon,
        setActiveMoon,
    }
}