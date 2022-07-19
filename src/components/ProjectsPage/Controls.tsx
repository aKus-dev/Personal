import { motion } from 'framer-motion';

import { arrowLeftAnimations, arrowRightAnimations } from '../../animations/ProjectsPage';
import { useTheme } from "../../hooks";


export const Controls = () => {

    const { theme } = useTheme();

    const srcArrowRight = theme === 'light' ? '/icons/right-light.svg' : '/icons/right-dark.svg';
    const srcArrowLeft = theme === 'light' ? '/icons/left-light.svg' : '/icons/left-dark.svg';

    return (
        <>
            <button className="cursor-default outline-none absolute z-20 flex items-center top-0 bottom-0 right-0 font-elianto text-[6.5rem]">
                <motion.img {...arrowRightAnimations} src={srcArrowRight} alt="Right" className="cursor-pointer" />
            </button>

            <button className="cursor-default outline-none absolute z-20 flex items-center top-0 bottom-0 left-0 font-elianto text-[6.5rem]">
                <motion.img {...arrowLeftAnimations} src={srcArrowLeft} alt="Left" className="cursor-pointer" />
            </button>
        </>
    )
}
