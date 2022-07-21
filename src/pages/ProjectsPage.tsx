import { Image, Info } from "../components/ProjectsPage";
import { MainLayout, ProjectLayout, Moon } from "../components"
import { validRoutes } from '../routes';
import { useScreen } from '../hooks';


export const ProjectsPage = () => {

    const size = useScreen();

    return (
        <MainLayout hiddenOvervlowX>
            {
                size === 'mobile' && (
                    <>
                        <Moon to={validRoutes.home} side='bottom' />
                    </>
                )
            }

            <ProjectLayout>
                <Info />
                <Image />
            </ProjectLayout>

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

