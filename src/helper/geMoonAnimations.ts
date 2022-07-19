import { useActiveMoon } from "../hooks";

export const getMoonAnimation = (side: string, noAnimateInitial: boolean) => {

    const { activeMoon } = useActiveMoon();

    let animations = {}

    switch (side) {
        case 'top':
            animations = {
                initial: { position: 'fixed', top: (noAnimateInitial ? -175 : -300), right: 0, left: 0, margin: 'auto', },
                animate: { top: -175 },
                exit: activeMoon === 'top' ? { rotate: 360, y: window.innerHeight + 100 } : { top: -300 },
            }
            break;

        case 'bottom':
            animations = {
                initial: { position: 'fixed', bottom: (noAnimateInitial ? -175 : -300), right: 0, left: 0, margin: 'auto', },
                animate: { bottom: -175 },
                exit: activeMoon === 'bottom' ? { rotate: 360, y: -window.innerHeight - 100 } : { bottom: -300 },
            }
            break;

        case 'right':
            animations = {
                initial: { position: 'fixed', right: (noAnimateInitial ? -175 : -300), top: 0, bottom: 0, margin: 'auto', },
                animate: { right: -175 },
                exit: activeMoon === 'right' ? { rotate: 360, x: -window.innerWidth - 100 } : { right: -300 },
            }
            break;

        case 'left':
            animations = {
                initial: { position: 'fixed', left: (noAnimateInitial ? -175 : -300), top: 0, bottom: 0, margin: 'auto', },
                animate: { left: -175 },
                exit: activeMoon === 'left' ? { rotate: 360, x: window.innerWidth + 100 } : { left: -300 },
            }
            break;
    }

    return animations;
}