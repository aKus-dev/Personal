import { motion } from 'framer-motion';

import {
    lightBulbAnimations,
    smokeAnimations
} from '../../animations/ProjectsPage';

import { Children } from '../../interfaces';
import { useTheme } from '../../hooks/useTheme';
import { useProject } from '../../hooks';

// children: Controls (arrows)
export const Image = ({ children }: Children) => {

    const { project } = useProject();
    const { theme } = useTheme();

    const srcSmoke = theme === 'light' ? '/assets/smoke-light.png' : '/assets/smoke-dark.png';

    return (
        <div className="relative">
            <motion.img
                {...lightBulbAnimations}
                className="relative z-10 top-0 w-[350px] lg:w-[400px] drop-shadow-[0_0_25px_#d3cfcf] dark:drop-shadow-none"
                src={project?.src}
                alt="Project icon"
            />

            <motion.img
                {...smokeAnimations}
                src={srcSmoke}
                alt="Project icon"
                className="absolute bottom-[-40px] w-[350px] lg:w-[400px] drop-shadow-[0_0_25px_#d3cfcf] dark:drop-shadow-none"
            />

            {children}
        </div>

    )
}
