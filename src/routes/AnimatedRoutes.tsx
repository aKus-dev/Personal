import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import { HomePage, NotFoundPage, ProjectsPage } from '../pages';

//TODO: pasar a array de objetos
export const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AnimatePresence>
    )
}