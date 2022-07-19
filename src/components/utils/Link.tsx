import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

import { Children } from '../../interfaces';

interface Props extends Children {
    href: string;
    blank?: boolean;
    initial?: object;
    animate?: object;
    transition?: object;
    exit?: object;
    className?: string;
}


export const Link = ({ children, href, blank, className = '', initial = {}, animate = {}, transition = {}, exit = {} }: Props) => {

    if (blank) return (
        <motion.a
            className={`${className} text-black dark:text-white text-[1.8rem] lg:text-[2rem] font-elianto underline`}
            initial={initial}
            animate={animate}
            transition={transition}
            exit={exit}
            href={href}
            target= "_blank"
        >
            {children}
        </motion.a>
    )

    return (
        <RouterLink to={href}>
            <motion.a
                className={`${className} text-black dark:text-white text-[1.8rem] lg:text-[2rem] font-elianto underline`}
                initial={initial}
                animate={animate}
                transition={transition}
                exit={exit}
                href={href}
            >
                {children}
            </motion.a>
        </RouterLink>
    )
}
