import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { arrowLeftAnimations, arrowRightAnimations, tagAnimation } from '../../animations/ProjectsPage';
import { Heading } from '../';

export const DesktopControls = () => {

    const bgTexture = `bg-[url('/assets/texture-light.png')] dark:bg-[url('/assets/texture-dark.png')]`

    return (
        <div className="hidden fixed my-auto top-0 bottom-0 right-10 lg:flex flex-col gap-2 items-center justify-center">
            <Link to="/projects/fisica">
                <motion.button  {...arrowLeftAnimations} className={`${bgTexture} w-[50px] h-[50px] rounded-[50%]`}>
                    <div className="h-[40px] w-[40px] inset-0 m-auto rounded-[50%] text-[#050709] dark:text-white bg-white dark:bg-[#0f1015]">
                        <div className={`${bgTexture} rotate-90 bg-center bg-cover bg-clip-text text-transparent w-full h-full flex items-center justify-center rounded-[50%]`}>
                            <i className="fa-solid fa-angle-left text-[30px]"></i>
                        </div>
                    </div>
                </motion.button>
            </Link>

            <Heading {...tagAnimation}>#1</Heading>

            <Link to="/projects/e-commerce">
                <motion.button {...arrowRightAnimations} className={`${bgTexture} w-[50px] h-[50px] rounded-[50%]`}>
                    <div className="h-[40px] w-[40px] inset-0 m-auto rounded-[50%] text-[#050709] dark:text-white bg-white dark:bg-[#0f1015]">
                        <div className={`${bgTexture} rotate-[-90deg] bg-center bg-cover bg-clip-text text-transparent w-full h-full flex items-center justify-center rounded-[50%]`}>
                            <i className="fa-solid fa-angle-left text-[30px]"></i>
                        </div>
                    </div>
                </motion.button>
            </Link>
        </div>
    )
}
