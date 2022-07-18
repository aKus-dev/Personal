import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { getMoonAnimation } from '../../helper/geMoonAnimations';
import { useActiveMoon, useTheme } from '../../hooks';

interface Props {
    side: 'top' | 'bottom' | 'right' | 'left',
    to: string;
    noAnimateInitial?: boolean;
}

const transition = {
    type: 'spring',
    duration: 1
}

export const Moon = ({ side, to, noAnimateInitial = false }: Props) => {

    const { theme } = useTheme();
    const { setActiveMoon } = useActiveMoon();

    const animations = getMoonAnimation(side, noAnimateInitial)
    const src = theme === 'light' ? '/assets/moon-light.png' : '/assets/moon-dark.png';

    return (
        <>
            <motion.div
                {...animations}
                transition={{ ...transition }}
                whileHover={{ scale: 1.1 }}
                className="p-4 border-[7px] dark:border-white border-black w-[250px] h-[250px] rounded-[50%] flex justify-center items-center"
            >
                <Link to={to}>
                    <motion.img
                        src={src}
                        alt="Moon"
                        className="drop-shadow-[0_0_35px_#ffffff4d] cursor-pointer"
                        whileHover={{ rotate: 360, scale: 1.05 }}
                        onClick={() => setActiveMoon(side)}
                    />
                </Link>
            </motion.div>

        </>
    )
}
