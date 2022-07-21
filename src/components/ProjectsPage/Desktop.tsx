import { Image } from "./desktop/Image"
import { Info } from "./desktop/Info"
import { Controls } from "./desktop/Controls"

export const Desktop = () => {
    return (
        <div className="w-[calc(100vw-80px)] h-screen ml-auto flex justify-center items-center flex-col gap-20">
            <Image />
            <Info />
            <Controls />
        </div>
    )
}
