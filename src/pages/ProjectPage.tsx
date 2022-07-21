import { useParams, Navigate } from 'react-router-dom';

import { Image, Info, Controls, DesktopControls } from "../components/ProjectPage";
import { MainLayout, ProjectLayout, Moon } from "../components"
import { projects } from "../data/projects";
import { validRoutes } from '../routes';
import { useProject, useScreen } from '../hooks';
import { useEffect } from 'react';


export const ProjectPage = () => {

    const size = useScreen();
    const { name } = useParams();
    const { setProject } = useProject();

    const result = projects.find(project => project.name === name)

    if(!result) return <Navigate to="/" />

    useEffect(
        () => {
            setProject(result)
        }, []
    )

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
                <Info />

                <Image>
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

