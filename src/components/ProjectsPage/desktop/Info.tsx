import { motion } from 'framer-motion';

import { linksAnimations, textAnimations, titleAnimations } from "../../../animations/ProjectsPage"
import { Heading, Text } from "../../"
import { Tags } from "./Tags"

export const Info = () => {
    return (
        <div className="flex items-center flex-col gap-2 max-w-[600px] mx-auto">

            <div className="text-center flex items-center gap-8">
                <Heading {...titleAnimations}>FÍSICA</Heading>

                <div className="flex gap-4 justify-center">
                    <motion.div {...linksAnimations} className="flex items-center gap-2">
                        <i className="fa-solid fa-link text-[2.5rem] text-[#272626] dark:text-[#cecbcb]"></i>
                    </motion.div>

                    <motion.div {...linksAnimations} className="flex items-center gap-2">
                        <i className="fa-brands fa-github text-[2.5rem] text-[#272626] dark:text-[#cecbcb]"></i>
                    </motion.div>
                </div>
            </div>

            <div className="flex flex-col gap-8">
                <Text {...textAnimations} className="max-w-[400px] lg:max-w-[700px] text-center">CALCULA CIRCUITOS EN SERIE Y EN PARALELO</Text>
                <Tags />
            </div>

        </div>
    )
}
