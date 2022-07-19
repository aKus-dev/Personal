import { MainLayout, Moon } from "../components"
import { useScreen } from '../hooks';

export const ProjectsPage = () => {

    const size = useScreen();

    return (
        <MainLayout>
            {
                size === 'mobile' && (
                    <>
                        <Moon to="/" side='bottom' noAnimateInitial />
                    </>
                )
            }

            {
                size === 'desktop' && (
                    <>
                        <Moon to="/" side='left' noAnimateInitial />
                    </>
                )
            }
        </MainLayout>
    )
}
