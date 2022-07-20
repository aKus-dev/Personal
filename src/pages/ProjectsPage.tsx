import { Info, Image } from '../components/ProjectsPage';
import { MainLayout, Moon } from "../components"
import { useScreen } from '../hooks';
import { validRoutes } from '../routes';

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

            <div className="h-[calc(100vh-80px)] w-full flex justify-center items-center flex-col gap-4">
                <Info />
                <Image />
            </div>

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

                   