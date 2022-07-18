import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import { HomePage } from '../pages';


export const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </AnimatePresence>
    )
}