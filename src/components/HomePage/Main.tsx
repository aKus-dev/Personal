import { motion } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';
import { Heading, Text } from '../';

import {
    textAnimations,
    titleAnimations,
    smokeAnimations,
    circleWhiteAnimations,
    circleAnimation
} from "../../animations/HomePage";





export const Main = () => {

    const { theme, light, dark } = useTheme();

    const src = theme === 'light' ? '/assets/smoke-light.png' : '/assets/smoke-dark.png';

    const handleChangeTheme = () => {
        theme === 'light' ? dark() : light();
    }

    return (
        <main>

            <motion.div {...circleAnimation} className="rounded-[50%] h-[28rem] w-[28rem] lg:h-[60rem] lg:w-[60rem] border-[1px] dark:border-white border-black flex justify-center items-center relative">

                <Heading {...titleAnimations} className="absolute top-[-40px] lg:top-[80px] lg:left-[-120px]">
                    PORTFOLIO
                </Heading>

                <Text {...textAnimations} className="absolute top-[-10px] lg:top-[140px] lg:left-[-120px] w-[22rem]">
                    PÁGINA PERSONAL
                </Text>

                <Text {...textAnimations} className="absolute bottom-[-40px] lg:bottom-[80px] lg:left-[500px] w-[27rem]">
                    FRONTEND DEVELOPER
                </Text>

                <Heading {...titleAnimations} className="absolute bottom-[-25px] lg:bottom-[105px] lg:left-[500px]">
                    PROFESIÓN
                </Heading>


                <motion.div
                    {...circleWhiteAnimations}
                    onClick={handleChangeTheme}
                    whileHover={{ scale: 1.1 }}
                    className="z-[99] cursor-pointer rounded-[50%] h-[20rem] w-[20rem] lg:h-[30rem] lg:w-[30rem] dark:bg-white bg-black flex justify-center items-center shadow-[0_0_10rem_#0000004d] dark:shadow-[0_0_10rem_#ffffff4d]"
                />

                <motion.img
                    {...smokeAnimations}
                    src={src}
                    className="absolute z-[9] bottom-[10px] lg:bottom-[60px] w-[70%]"
                    alt="Smoke"
                />
            </motion.div>
        </main>
    )
}
