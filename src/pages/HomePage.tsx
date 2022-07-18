import { Link } from "react-router-dom"

import { MainLayout, Moon } from "../components"
import { useScreen } from '../hooks';


export const HomePage = () => {

    const size = useScreen();

    return (
        <MainLayout>

            {
                size === 'mobile' && (
                    <>
                        <Moon side='top' />
                        <Moon side='bottom' />
                    </>
                )
            }

            {
                size === 'desktop' && (
                    <>
                        <Moon side="right" />
                        <Moon side="left" />
                    </>
                )
            }


            <Link to="/about">
                <p className="font-ailerons text-[70px]">Next</p>
            </Link>

        </MainLayout>
    )
}
