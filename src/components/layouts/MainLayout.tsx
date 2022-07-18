import { Children } from "../../interfaces"

export const MainLayout = ({children}: Children) => {
    return (
        <div className="text-white bg-gradient-to-r from-[#0f1015] to-[#050709] min-h-screen flex justify-center items-center flex-col">
            {children}
        </div>
    )
}
