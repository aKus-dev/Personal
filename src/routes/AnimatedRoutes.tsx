import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

import { routes } from './routes';

export const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                {
                    routes.map(
                        ({ path, Component }) => <Route key={path} path={path} element={ <Component /> } />
                    )
                }
            </Routes>
        </AnimatePresence>
    )
}