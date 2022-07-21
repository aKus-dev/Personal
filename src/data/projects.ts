export interface IProjects {
    name: string;
    title: string;
    desc: string;
    img: string;
}

export const projects = [
    {
        name: 'fisica',
        title: 'Física',
        desc: 'Calcula circuitos en serie y en paralelo',
        img: 'lamp.png',
        tags: ['HTML5', 'CSS3', 'Javascript'],
        deploy: '',
        github: ''
    },
    {
        name: 'e-commerce',
        title: 'E-Commerce',
        desc: 'Simulador de e-commerce',
        img: 'shop.png',
        tags: ['HTML5', 'CSS3', 'ReactJS'],
        deploy: '',
        github: ''
    }
]

