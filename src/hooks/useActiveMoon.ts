import { useAtom } from 'jotai';

import { activeMoonAtom, noAnimateConfigAtom } from '../global';
import { validRoutes } from '../routes';


export const useActiveMoon = () => {

    const [activeMoon, setActiveMoon] = useAtom(activeMoonAtom)
    const [noAnimateConfig, setNoAnimateConfig] = useAtom(noAnimateConfigAtom)


    /*
        * from: Desde que página se clickeó la moon
        * to: Hacia que página voy a re-direccionar
    */
    const updateNoAnimateConfig = (from: string, to: string) => {

        // From /home
        if (from === validRoutes.home) {
            if (to === validRoutes.projects) return setNoAnimateConfig({ top: false, bottom: true, right: false, left: true })
            if (to === validRoutes.technologies) return setNoAnimateConfig({ top: true, bottom: false, right: true, left: false })
        }

        // From /projects
        if (from === validRoutes.projects) {
            if (to === validRoutes.home) return setNoAnimateConfig({ top: true, bottom: false, right: true, left: false })
        }

        // From /technologies
        if (from === validRoutes.technologies) {
            if (to === validRoutes.home) return setNoAnimateConfig({ top: false, bottom: true, right: false, left: true })
        }

    }

    return {
        activeMoon,
        setActiveMoon,
        noAnimateConfig,
        updateNoAnimateConfig
    }

}


