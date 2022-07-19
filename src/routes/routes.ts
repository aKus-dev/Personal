import { HomePage, NotFoundPage, ProjectsPage } from '../pages';

/*
* Se utiliza en el router
*/
export const routes = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/projects',
        Component: ProjectsPage
    },
    {
        path: '*',
        Component: NotFoundPage
    }
]

/*
* Se utiliza en <a> o <Link>
*/
export const validRoutes = {
    home: '/',
    projects: '/projects',
    technologies: '/technologies',
}