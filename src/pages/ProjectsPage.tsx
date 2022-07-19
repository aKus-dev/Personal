import { MainLayout, Moon } from "../components"
import { useScreen } from '../hooks';
import { validRoutes } from '../routes';

export const ProjectsPage = () => {

    const size = useScreen();

    return (
        <MainLayout>
            {
                size === 'mobile' && (
                    <>
                        <Moon to={validRoutes.home} side='bottom' />
                    </>
                )
            }

            {
                size === 'desktop' && (
                    <>
                        <Moon to={validRoutes.home} side='left' />
                    </>
                )
            }
        </MainLayout>
    )
}
