import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

import {
    lightBulbAnimations,
    smokeAnimations
} from '../../animations/ProjectsPage';

import { Children } from '../../interfaces';
import { useTheme } from '../../hooks/useTheme';
import { projects } from '../../data/projects';

// children: Controls (arrows)
interface Props extends Children {
    src: string;
}

export const Image = ({ children, src }: Props) => {

    const { theme } = useTheme();

    const srcSmoke = theme === 'light' ? '/assets/smoke-light.png' : '/assets/smoke-dark.png';

    const { name } = useParams();
    const result = projects.find(p => p.name === name)


    return (
        <div className="relative">
            <motion.img
                {...lightBulbAnimations}
                className="relative z-10 top-0 w-[350px] lg:w-[400px] drop-shadow-[0_0_25px_#d3cfcf] dark:drop-shadow-none"
                src={src}
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
