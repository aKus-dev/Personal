import { motion } from 'framer-motion';

import {
    titleAnimations,
    textAnimations,
    linksAnimations,
} from '../../animations/ProjectsPage';

import { Text, Heading, Link } from "../"

import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import { Tags } from './';


export const Info = () => {

    const { name } = useParams();
    const result = projects.find(p => p.name === name)

    return (
        <div className="flex items-center flex-col gap-6 w-full">
            <div className="text-center">
                <div className="flex gap-4 justify-center">
                    <Heading {...titleAnimations}>{result?.title}</Heading>

                    <motion.div {...linksAnimations} className="hidden lg:flex items-center gap-2">
                        <i className="fa-solid fa-link text-[2.5rem] text-[#272626] dark:text-[#cecbcb]"></i>
                    </motion.div>

                    <motion.div {...linksAnimations} className="hidden lg:flex items-center gap-2">
                        <i className="fa-brands fa-github text-[2.5rem] text-[#272626] dark:text-[#cecbcb]"></i>
                    </motion.div>
                </div>



                <div className="lg:flex lg:flex-col lg:gap-6">
                    <Text {...textAnimations} className="max-w-[400px] lg:max-w-[700px] text-center">{result?.desc}</Text>

                    <div className="hidden lg:flex flex-col gap-8">
                        <Tags />
                    </div>
                </div>
            </div>

            <div className="lg:hidden flex gap-6 justify-center">
                <motion.div {...linksAnimations} className="flex items-center gap-2">
                    <i className="fa-solid fa-link text-[2.5rem]"></i>
                </motion.div>

                <motion.div {...linksAnimations} className="flex items-center gap-2">
                    <i className="fa-brands fa-github text-[2.5rem]"></i>
                </motion.div>
            </div>
        </div >
    )
}
