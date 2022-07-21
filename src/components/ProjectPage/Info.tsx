import { motion } from 'framer-motion';

import {
    titleAnimations,
    textAnimations,
    linksAnimations,
} from '../../animations/ProjectsPage';

import { Text, Heading, Link } from ".."
import { Tags } from '.';

interface Props {
    title: string;
    desc: string;
    tags: string[];
}


export const Info = ({title, desc, tags}: Props) => {


    return (
        <div className="flex items-center flex-col gap-6 w-full">
            <div className="text-center">
                <div className="flex gap-4 justify-center">
                    <Heading {...titleAnimations}>{title}</Heading>

                    <motion.div {...linksAnimations} className="hidden lg:flex items-center gap-2">
                        <i className="fa-solid fa-link text-[2.5rem] text-[#272626] dark:text-[#cecbcb]"></i>
                    </motion.div>

                    <motion.div {...linksAnimations} className="hidden lg:flex items-center gap-2">
                        <i className="fa-brands fa-github text-[2.5rem] text-[#272626] dark:text-[#cecbcb]"></i>
                    </motion.div>
                </div>

                <div className="lg:flex lg:flex-col lg:gap-6">
                    <Text {...textAnimations} className="max-w-[400px] lg:max-w-[700px] text-center">{desc}</Text>

                    <div className="hidden lg:flex flex-col gap-8">
                        <Tags tags={tags} />
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
