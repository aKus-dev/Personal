import { Children } from "../../interfaces"

export const ProjectLayout = ({ children }: Children) => {
    return (
        <div className="h-[calc(100vh-80px)] lg:h-screen w-screen flex justify-center items-center flex-col lg:flex-col-reverse gap-4 lg:gap-20">
            {children}
        </div>
    )
}
