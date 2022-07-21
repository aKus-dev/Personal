import { Image, Info } from "./"

export const Mobile = () => {
    return (
        <div className="h-[calc(100vh-80px)] w-full flex justify-center items-center flex-col gap-4">
            <Info />
            <Image />
        </div>
    )
}
