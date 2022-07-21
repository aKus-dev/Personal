import { motion } from 'framer-motion';

import { tagAnimation } from '../../animations/ProjectsPage';

export const Tags = () => {
    return (
        <div className="flex justify-center flex-wrap gap-6">
            <motion.span {...tagAnimation} className="flex items-center justify-center px-6 py-2 bg-[#0f1015] dark:bg-white text-white dark:text-[#0f1015] text-[1.65rem] font-bold rounded-[5rem] font-elianto uppercase">HTML5</motion.span>
            <motion.span {...tagAnimation} className="flex items-center justify-center px-6 py-2 bg-[#0f1015] dark:bg-white text-white dark:text-[#0f1015] text-[1.65rem] font-bold rounded-[5rem] font-elianto uppercase">CSS3</motion.span>
            <motion.span {...tagAnimation} className="flex items-center justify-center px-6 py-2 bg-[#0f1015] dark:bg-white text-white dark:text-[#0f1015] text-[1.65rem] font-bold rounded-[5rem] font-elianto uppercase">Javascript</motion.span>
        </div>
    )
}
