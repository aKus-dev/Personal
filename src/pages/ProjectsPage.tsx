import { Mobile, Desktop } from "../components/ProjectsPage";
import { MainLayout, Moon } from "../components"
import { useScreen } from '../hooks';
import { validRoutes } from '../routes';

//TODO: Mostrar condicionalmente mobile & desktop ya que van a tener 2 layouts distintos
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

            {
                size === 'mobile' ? <Mobile /> :  <Desktop />
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

                   