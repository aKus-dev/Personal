import { useParams, Navigate } from 'react-router-dom';

import { Image, Info, Controls, DesktopControls } from "../components/ProjectPage";
import { MainLayout, ProjectLayout, Moon } from "../components"
import { projects } from "../data/projects";
import { validRoutes } from '../routes';
import { useScreen } from '../hooks';


export const ProjectPage = () => {

    const size = useScreen();
    const { name } = useParams();

    const result = projects.find(project => project.name === name)

    if(!result) return <Navigate to="/" />
    
    const {title, desc, tags, src } = result;

    return (
        <MainLayout hiddenOvervlowX>
            {
                size === 'mobile' && (
                    <>
                        <Moon to={validRoutes.home} side='bottom' />
                    </>
                )
            }

            <ProjectLayout>
                <Info title={title} desc={desc} tags={tags} />

                <Image src={src} >
                    <Controls />
                </Image>

                <DesktopControls />
            </ProjectLayout>

            {
                size === 'desktop' && (
                    <>
                        <Moon to={validRoutes.home} side='left' />
                    </>
                )
            }
        </MainLayout>
    )
}

