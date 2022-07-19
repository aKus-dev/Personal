import { useTheme } from '../../hooks/useTheme';
import { Controls } from './';

export const Image = () => {

    const { theme } = useTheme();

    const srcSmoke = theme === 'light' ? '/assets/smoke-light.png' : '/assets/smoke-dark.png';

    return (
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

            <Controls />
        </div>

    )
}
