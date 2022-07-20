import { Children } from "../../interfaces"

interface Props extends Children {
    hiddenOvervlowX?: boolean;
    hiddenOvervlowY?: boolean;
    center?: boolean;
}

export const MainLayout = ({ children, hiddenOvervlowX, hiddenOvervlowY, center }: Props) => {

    const className = `
        ${hiddenOvervlowX ? 'overflow-x-hidden' : ''}
        ${hiddenOvervlowY ? 'overflow-y-hidden' : ''}
        ${center ? 'flex justify-center items-center flex-col gap-2': ''}
        dark:text-darkText text-lightText dark:bg-gradient-to-r dark:from-[#0f1015] dark:to-[#050709] min-h-screen
    `

    return (
        <div className={className}>
            {children}
        </div>
    )
}
