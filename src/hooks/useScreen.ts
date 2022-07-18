import { useEffect, useState } from 'react';

type ScreenSizes = 'mobile' | 'desktop'

export const useScreen = (): ScreenSizes => {

    const [width, setWidth] = useState(window.innerWidth);
    const [size, setSize] = useState<ScreenSizes>( width <= 1024 ? 'mobile' : 'desktop');

    window.onresize = () => setWidth(window.innerWidth);

    useEffect(
        () => {

            width <= 1024 ? setSize('mobile') : setSize('desktop')

        }, [width]
    )

    return size;
}