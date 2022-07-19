import { MainLayout, Moon } from "../components"
import { Main } from '../components/HomePage';
import { useScreen } from '../hooks';

export const HomePage = () => {

    const size = useScreen();

    return (
        <MainLayout hiddenOvervlowY hiddenOvervlowX>

            {
                size === 'mobile' && (
                    <>
                        <Moon to="/projects" side='top' />
                        <Moon to="/technologies" side='bottom' />
                    </>
                )
            }

            <Main />

            {
                size === 'desktop' && (
                    <>
                        <Moon to="/projects" side="right" />
                        <Moon to="/technologies" side="left" />
                    </>
                )
            }

        </MainLayout>
    )
}
