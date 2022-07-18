import { motion } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';

import {
    textAnimations,
    titleAnimations,
    smokeAnimations,
    circleWhiteAnimations,
    circleAnimation
} from "../../animations/HomePage";

// TODO: Hacerlo responsive
export const Main = () => {

    const { theme } = useTheme();
    const src = theme === 'light' ? '/assets/smoke-light.png' : '/assets/smoke-dark.png';

    return (
        <main>
            <motion.div {...circleAnimation} className="rounded-[50%] h-[60rem] w-[60rem] border-[1px] dark:border-white border-black flex justify-center items-center relative">

                <motion.h1 {...titleAnimations} className="font-elianto text-[5rem] absolute top-[80px] left-[-120px]">
                    PORTFOLIO
                </motion.h1>

                <motion.p {...textAnimations} className="font-ailerons text-[2.5rem] absolute top-[140px] left-[-120px]">
                    PÁGINA PERSONAL
                </motion.p>


                <motion.h1 {...textAnimations} className="w-[27rem] font-ailerons text-[2.5rem] absolute bottom-[80px] left-[450px]">
                    FRONTEND DEVELOPER
                </motion.h1>

                <motion.p {...titleAnimations} className="w-[28rem] font-elianto text-[5rem] absolute bottom-[105px] left-[450px]">
                    PROFESIÓN
                </motion.p>

                <motion.img
                    {...smokeAnimations}
                    src={src}
                    className="absolute bottom-[60px] w-[70%]"
                    alt="Smoke"
                />

                <motion.div
                    {...circleWhiteAnimations}
                    className="rounded-[50%] h-[30rem] w-[30rem] dark:bg-white bg-black flex justify-center items-center shadow-[0_0_10rem_#ffffff4d]"
                />
            </motion.div>
        </main>
    )
}
