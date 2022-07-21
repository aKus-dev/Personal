import { motion } from 'framer-motion';

import { Children } from '../../interfaces';

interface Props extends Children {
    initial?: object;
    animate?: object;
    transition?: object;
    exit?: object;
    className?: string;
}

export const Text = ({ children, className = '', initial = {}, animate = {}, transition = {}, exit = {} }: Props) => {


    return (
        <motion.p
            className={`uppercase text-[#272626] dark:text-[#cecbcb] font-ailerons text-[2rem] lg:text-[2.5rem] ${className}`}
            initial={initial}
            animate={animate}
            transition={transition}
            exit={exit}
        >
            {children}
        </motion.p>
    )
}
