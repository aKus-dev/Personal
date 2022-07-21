import { motion } from 'framer-motion';

import { Children } from '../../interfaces';

interface Props extends Children {
    initial?: object;
    animate?: object;
    transition?: object;
    exit?: object;
    className?: string;
}


export const Heading = ({ children, className = '', initial = {}, animate = {}, transition = {}, exit = {} }: Props) => {


    return (
        <motion.h2
            className={`${className} uppercase text-black dark:text-white font-elianto text-[3rem] lg:text-[5rem]`}
            initial={initial}
            animate={animate}
            transition={transition}
            exit={exit}
        >
            {children}
        </motion.h2>
    )
}
