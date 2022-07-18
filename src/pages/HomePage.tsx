import { MainLayout, Moon } from "../components"
import { Main } from '../components/HomePage';
import { useScreen } from '../hooks';

export const HomePage = () => {

    const size = useScreen();

    return (
        <MainLayout hiddenOvervlowY>

            {
                size === 'mobile' && (
                    <>
                        <Moon to="/about" side='top' />
                        <Moon to="/about" side='bottom' />
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
