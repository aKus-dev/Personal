export interface IProjects {
    name: string;
    title: string;
    src: string;
    desc: string;
    tags: string[];
    deploy: string;
    github: string;
}

export const projects: IProjects[] = [
    {
        name: 'fisica',
        title: 'Física',
        src: '/assets/lamp.png',
        desc: 'Calcula circuitos en serie y en paralelo',
        tags: ['HTML5', 'CSS3', 'Javascript'],
        deploy: '',
        github: ''
    },
    {
        name: 'e-commerce',
        title: 'E-Commerce',
        desc: 'Simulador de e-commerce',
        src: '/assets/shop.png',
        tags: ['HTML5', 'CSS3', 'ReactJS'],
        deploy: '',
        github: ''
    }
]

