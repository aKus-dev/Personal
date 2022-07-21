export interface IProjects {
    number: number;
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
        number: 1,
        name: 'fisica',
        title: 'Física',
        src: '/projects/lamp.png',
        desc: 'Calcula circuitos en serie y en paralelo',
        tags: ['HTML5', 'CSS3', 'Javascript'],
        deploy: '',
        github: ''
    },
    {
        number: 2,
        name: 'e-commerce',
        title: 'E-Commerce',
        desc: 'Simulador de e-commerce',
        src: '/projects/shop.png',
        tags: ['HTML5', 'CSS3', 'ReactJS'],
        deploy: '',
        github: ''
    },
    {
        number: 3,
        name: 'markdown',
        title: 'Markdown',
        desc: 'Editor con preview en tiempo real',
        src: '/projects/markdown.png',
        tags: ['HTML5', 'TailwindCSS', 'ReactJS', 'Typescript', 'Jotai'],
        deploy: '',
        github: ''
    },
    {
        number: 4,
        name: 'tasks',
        title: 'Tasks',
        desc: 'Gestor de tareas por categoría',
        src: '/projects/task.png',
        tags: ['HTML5', 'TailwindCSS', 'ReactJS', 'Typescript', 'Jotai'],
        deploy: '',
        github: ''
    },
    {
        number: 5,
        name: 'job',
        title: 'Jobs',
        desc: 'Busca trabajos IT y filtra por etiquetas',
        src: '/projects/job.png',
        tags: ['HTML5', 'TailwindCSS', 'ReactJS', 'Typescript', 'Redux'],
        deploy: '',
        github: ''
    },
    {
        number: 6,
        name: 'music',
        title: 'Music',
        desc: 'Busca canciones y reproducelas',
        src: '/projects/music.png',
        tags: ['HTML5', 'SASS', 'ReactJS', 'Typescript', 'API'],
        deploy: '',
        github: ''
    },
    {
        number: 7,
        name: 'quiz',
        title: 'Quiz',
        desc: 'Preguntas y respuestas por categorías',
        src: '/projects/quiz.png',
        tags: ['HTML5', 'SASS', 'ReactJS', 'Typescript', 'API'],
        deploy: '',
        github: ''
    },
    {
        number: 8,
        name: 'github',
        title: 'GitHub',
        desc: 'Busca perfiles de github',
        src: '/projects/github.png',
        tags: ['HTML5', 'SASS', 'ReactJS', 'Typescript', 'API'],
        deploy: '',
        github: ''
    },
    {
        number: 9,
        name: 'todo',
        title: 'Todo',
        desc: 'Todo app para litar tareas pendientes',
        src: '/projects/todo.png',
        tags: ['HTML5', 'SASS', 'ReactJS'],
        deploy: '',
        github: ''
    },
    {
        number: 10,
        name: 'chat',
        title: 'Chat',
        desc: 'Chat institucional con sistema de login',
        src: '/projects/chat.png',
        tags: ['HTML5', 'SASS', 'Javascript', 'PHP'],
        deploy: '',
        github: ''
    }
]

