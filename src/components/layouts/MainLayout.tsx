import { Children } from "../../interfaces"

interface Props extends Children {
    hiddenOvervlowX?: boolean;
    hiddenOvervlowY?: boolean;
}

export const MainLayout = ({ children, hiddenOvervlowX, hiddenOvervlowY }: Props) => {

    const className = `
        ${hiddenOvervlowX ? 'overflow-x-hidden' : ''}
        ${hiddenOvervlowY ? 'overflow-y-hidden' : ''}
        dark:text-darkText text-lightText dark:bg-gradient-to-r  dark:from-[#0f1015] dark:to-[#050709] min-h-screen flex justify-center items-center flex-col gap-2
    `

    return (
        <div className={className}>
            {children}
        </div>
    )
}
