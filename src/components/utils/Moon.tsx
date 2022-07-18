import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getMoonAnimation } from '../../helper/geMoonAnimations';

import { useActiveMoon } from '../../hooks';

interface Props {
    side: 'top' | 'bottom' | 'right' | 'left'
}

const transition = {
    type: 'spring',
    duration: 1
}

export const Moon = ({ side }: Props) => {

    const { setActiveMoon } = useActiveMoon();

    const animations = getMoonAnimation(side)

    return (
        <>
            <motion.div
                {...animations}
                transition={{ ...transition }}
                whileHover={{ scale: 1.1 }}
                className="p-4 border-[7px] border-white w-[250px] h-[250px] rounded-[50%] flex justify-center items-center"
            >
                <Link to="/about">
                    <motion.img
                        src="/assets/effect.png"
                        alt="Circle"
                        className="drop-shadow-[0_0_35px_#ffffff4d] cursor-pointer"
                        whileHover={{ rotate: 360, scale: 1.05 }}
                        onClick={() => setActiveMoon(side)}
                    />
                </Link>
            </motion.div>

        </>
    )
}
