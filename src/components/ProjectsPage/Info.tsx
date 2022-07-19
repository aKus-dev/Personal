import { motion } from 'framer-motion';

import {
    titleAnimations,
    textAnimations,
    linksAnimations,
} from '../../animations/ProjectsPage';

import { Text, Heading, Link } from "../"

export const Info = () => {
    return (
        <div className="flex items-center flex-col gap-2 w-full">

            <Heading {...titleAnimations}>FÍSICA</Heading>

            <Text {...textAnimations} className="max-w-[400px] lg:max-w-[700px] text-center">CALCULA CIRCUITOS EN SERIE Y EN PARALELO</Text>

            <div className="flex gap-10 justify-center">
                <motion.div {...linksAnimations} className="flex items-center gap-2">
                    <i className="fa-solid fa-link text-[1.5rem]"></i>
                    <Link blank href="#">Deploy</Link>
                </motion.div>

                <motion.div {...linksAnimations} className="flex items-center gap-2">
                    <i className="fa-brands fa-github text-[1.5rem]"></i>
                    <Link  href="/projects/otro" className="text-[1.8rem] font-elianto underline">GitHub</Link>
                </motion.div>
            </div>
        </div>
    )
}
