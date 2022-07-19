import { MainLayout, Moon } from "../components"
import { useScreen, useTheme } from '../hooks';
import { validRoutes } from '../routes';

//TODO: Sacar el more-info y poner directamente enlaces al deploy & github
export const ProjectsPage = () => {

    const size = useScreen();
    const { theme } = useTheme();

    const srcSmoke = theme === 'light' ? '/assets/smoke-light.png' : '/assets/smoke-dark.png';
    const srcMoreInfo = theme === 'light' ? '/icons/more-info-light.svg' : '/icons/more-info-dark.svg';
    const srcArrowRight = theme === 'light' ? '/icons/right-light.svg' : '/icons/right-dark.svg';
    const srcArrowLeft = theme === 'light' ? '/icons/left-light.svg' : '/icons/left-dark.svg';

    return (
        <MainLayout>
            {
                size === 'mobile' && (
                    <>
                        <Moon to={validRoutes.home} side='bottom' />
                    </>
                )
            }

            <div className="h-[calc(100vh-80px)] w-full flex justify-center items-center flex-col gap-4">

                <div>
                    <div className="flex justify-center items-center gap-4">
                        <h1 className="font-elianto text-[4rem]">FÍSICA</h1>

                        <button>
                            <img src={srcMoreInfo} className="h-[30px]" alt="More info" />
                        </button>
                    </div>

                    <p className="max-w-[450px] lg:max-w-[650px] text-center  font-ailerons text-[2rem] text-[#cecbcb]">CALCULA CIRCUITOS EN SERIE Y PARALELOS</p>
                </div>


                <div className="relative">
                    <img
                        className="relative z-10 top-0 w-[350px] drop-shadow-[0_0_25px_#d3cfcf] dark:drop-shadow-none"
                        src="/assets/lamp.png"
                        alt="Project icon"
                    />

                    <img
                        src={srcSmoke}
                        alt="Project icon"
                        className="absolute bottom-[-40px] w-[350px] drop-shadow-[0_0_25px_#d3cfcf] dark:drop-shadow-none"
                    />

                    <button className="absolute flex items-center top-0 bottom-0 right-0 font-elianto text-[6.5rem]">
                        <img src={srcArrowRight} alt="Right" />
                    </button>

                    <button className="absolute flex items-center top-0 bottom-0 left-0 font-elianto text-[6.5rem]">
                        <img src={srcArrowLeft} alt="Left"/>
                    </button>
                </div>



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
