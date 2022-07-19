import { Main } from '../components/HomePage';
import { MainLayout, Moon } from "../components"
import { useScreen } from '../hooks';
import { validRoutes } from '../routes';

export const HomePage = () => {

    const size = useScreen();

    return (
        <MainLayout center hiddenOvervlowY hiddenOvervlowX>

            {
                size === 'mobile' && (
                    <>
                        <Moon to={validRoutes.projects} side='top' />
                        <Moon to={validRoutes.technologies} side='bottom' />
                    </>
                )
            }

            <Main />

            {
                size === 'desktop' && (
                    <>
                        <Moon to={validRoutes.projects} side="right" />
                        <Moon to={validRoutes.technologies} side="left" />
                    </>
                )
            }

        </MainLayout>
    )
}
