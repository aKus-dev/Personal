import { motion } from 'framer-motion';

import { tagAnimation } from '../../animations/ProjectsPage';

interface Props {
    tags: string[];
}

export const Tags = ({ tags }: Props) => {
    return (
        <div className="flex justify-center flex-wrap gap-6">

            {
                tags.map(tag => (
                    <motion.span
                        {...tagAnimation}
                        key={tag}
                        className="flex items-center justify-center px-6 py-2 bg-[#0f1015] dark:bg-white text-white dark:text-[#0f1015] text-[1.65rem] font-bold rounded-[5rem] font-elianto uppercase"
                    >
                        {tag}
                    </motion.span>
                ))
            }

        </div>
    )
}
