import { motion } from 'framer-motion';

import { MainLayout } from '../components';

export const NotFoundPage = () => {
    return (
        <MainLayout>
            <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.55 }}
                className="text-[5.5rem] font-blanka"
            >
                Not found
            </motion.h1>

            <motion.p
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.55 }}
                className="text-[1.5rem] text-gray-300 font-elianto"
            >No hemos encontrado ninguna página
            </motion.p>
        </MainLayout>
    )
}
