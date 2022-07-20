import { motion } from 'framer-motion';

import {
    titleAnimations,
    textAnimations,
    linksAnimations,
} from '../../animations/ProjectsPage';

import { Text, Heading, Link } from "../"

export const Info = () => {
    return (
        <div className="flex items-center flex-col gap-6 w-full">

            <div className="text-center">
                <Heading {...titleAnimations}>FÍSICA</Heading>
                <Text {...textAnimations} className="max-w-[400px] lg:max-w-[700px] text-center">CALCULA CIRCUITOS EN SERIE Y EN PARALELO</Text>
            </div>

            <div className="flex gap-6 justify-center">
                <motion.div {...linksAnimations} className="flex items-center gap-2">
                    <i className="fa-solid fa-link text-[2.5rem]"></i>
                </motion.div>

                <motion.div {...linksAnimations} className="flex items-center gap-2">
                    <i className="fa-brands fa-github text-[2.5rem]"></i>
                </motion.div>
            </div>
        </div>
    )
}
