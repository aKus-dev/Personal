export const Info = () => {
    return (
        <div className="flex flex-col gap-2">

            <h1 className="font-elianto text-[4rem] text-center">FÍSICA</h1>

            <p className="max-w-[450px] lg:max-w-[650px] text-center  font-ailerons text-[2rem] text-[#cecbcb]">CALCULA CIRCUITOS EN SERIE Y PARALELOS</p>

            <div className="flex gap-10 justify-center">
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-link text-[1.5rem]"></i>
                    <a href="#" className="text-[1.8rem] font-elianto underline">Deploy</a>
                </div>

                <div className="flex items-center gap-2">
                    <i className="fa-brands fa-github text-[1.5rem]"></i>
                    <a href="#" className="text-[1.8rem] font-elianto underline">GitHub</a>
                </div>
            </div>
        </div>
    )
}
