import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { arrowLeftAnimations, arrowRightAnimations } from '../../animations/ProjectsPage';

export const Controls = () => {

    const bgTexture = `bg-[url('/assets/texture-light.png')] dark:bg-[url('/assets/texture-dark.png')]`

    return (
        <div className="lg:hidden">
            <Link to="/projects/fisica">
                <motion.button {...arrowLeftAnimations} className={`${bgTexture} absolute my-auto top-0 bottom-0 left-0 z-20 w-[50px] h-[50px] rounded-[50%]`}>
                    <div className="h-[40px] w-[40px] inset-0 m-auto rounded-[50%] text-[#050709] dark:text-white bg-white dark:bg-[#0f1015]">
                        <div className={`${bgTexture} bg-center bg-cover bg-clip-text text-transparent w-full h-full flex items-center justify-center rounded-[50%]`}>
                            <i className="fa-solid fa-angle-left text-[30px]"></i>
                        </div>
                    </div>
                </motion.button>
            </Link>


            <Link to="/projects/e-commerce">
                <motion.button {...arrowRightAnimations} className={`${bgTexture} absolute my-auto top-0 bottom-0 right-0 z-20 w-[50px] h-[50px] rounded-[50%]`}>
                    <div className="h-[40px] w-[40px] inset-0 m-auto rounded-[50%] bg-white dark:bg-[#090a0d]">
                        <div className={`${bgTexture} bg-center bg-cover bg-clip-text text-transparent w-full h-full flex items-center justify-center rounded-[50%]`}>
                            <i className="fa-solid fa-angle-right text-[30px] text-[#050709] dark:text-white"></i>
                        </div>
                    </div>
                </motion.button>
            </Link>

        </div>
    )
}
