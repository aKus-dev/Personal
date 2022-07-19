import { useTheme } from "../../hooks";

export const Controls = () => {

    const { theme } = useTheme();

    const srcArrowRight = theme === 'light' ? '/icons/right-light.svg' : '/icons/right-dark.svg';
    const srcArrowLeft = theme === 'light' ? '/icons/left-light.svg' : '/icons/left-dark.svg';

    return (
        <>
            <button className="absolute flex items-center top-0 bottom-0 right-0 font-elianto text-[6.5rem]">
                <img src={srcArrowRight} alt="Right" />
            </button>

            <button className="absolute flex items-center top-0 bottom-0 left-0 font-elianto text-[6.5rem]">
                <img src={srcArrowLeft} alt="Left" />
            </button>
        </>
    )
}
