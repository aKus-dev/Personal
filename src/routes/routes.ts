import { HomePage, NotFoundPage, ProjectPage } from '../pages';

/*
* Se utiliza en el router
*/
export const routes = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/projects/:name',
        Component: ProjectPage
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
    projects: '/projects/fisica',
    technologies: '/technologies',
}