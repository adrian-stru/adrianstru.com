// tslint:disable: max-line-length

interface ProjectInterface {
    name: string;
    description: string;
    githubUrl: string;
    siteUrl: string;
    tags: string[];
}


const projectsConfig: ProjectInterface[] = [
    {
        name: 'personal site',
        description: 'My first portfolio website that I designed and built.',
        githubUrl: 'ddd',
        siteUrl: 'dsd',
        tags: [
            'vue',
            'webgl',
            'three.js',
        ],
    },
    {
        name: 'summers-left',
        description: 'Small webapp that shows how many summers you have remaining',
        githubUrl: 'dsds',
        siteUrl: 'dd',
        tags: [
            'react',
            'typescript',
            'd3.js',
        ],
    },
    {
        name: 'three-experiments',
        description: 'A wip collection of three.js experiments.',
        githubUrl: '',
        siteUrl: '',
        tags: [
            'react',
            'webgl',
            'three.js',
        ],
    },
    {
        name: 'travel filters',
        description: 'A progressive web app to help customers select their ring sizes in store and get an email for future reference.',
        githubUrl: '',
        siteUrl: '',
        tags: [
            'java',
            'spring',
            'react',
            'python',
            'mysql',
            'jwt',
        ],
    },
    {
        name: 'the people\'s jukebox',

        description: 'Collaborated with team to design and build a real-time and multi-platform jukebox app. I was responsible for building the backend api using a combination of HTTP and WebSockets.',
        githubUrl: '',
        siteUrl: '',
        tags: [
            'node.js',
            'express',
            'typescript',
            'socket.io',
            'mysql',
        ],
    },
    {
        name: 'ring sizing app',
        description: 'A progressive web app to help customers select their ring sizes in store and get an email for future reference.',
        githubUrl: '',
        siteUrl: '',
        tags: [
            'vue',
            'pwa',
            'node',
            'express',
            'docker',
        ],
    },
    {
        name: 'antara life',
        description: 'A progressive web app to help customers select their ring sizes in store and get an email for future reference.',
        githubUrl: '',
        siteUrl: '',
        tags: [
            'vue',
            'craft',
            'php',
            'express',
            'docker',
        ],
    },
    {
        name: 'building better',
        description: 'A progressive web app to help customers select their ring sizes in store and get an email for future reference.',
        githubUrl: '',
        siteUrl: '',
        tags: [
            'vue',
            'craft',
            'php',
            'axios',
        ],
    },
];

export {ProjectInterface as Project, projectsConfig};
