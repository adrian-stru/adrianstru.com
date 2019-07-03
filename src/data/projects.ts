// tslint:disable: max-line-length

interface ProjectInterface {
    name: string;
    description: string;
    githubUrl?: string;
    siteUrl?: string;
    tags: string[];
}


const projectsConfig: ProjectInterface[] = [
    {
        name: 'dash',
        description: 'Full stack react dashboard app for practice with draggable to-do list, notes application, and weather info.',
        tags: [
            'react',
            'graphql',
            'apollo',
            'express',
            'styled components',
        ],
        githubUrl: '',
        siteUrl: '',
    },
    {
        name: 'personal site',
        description: 'My first portfolio website that I designed and built.',
        githubUrl: 'https://github.com/adrian-stru/adrianstru.com',
        siteUrl: '',
        tags: [
            'vue',
            'webgl',
            'three.js',
        ],
    },
    {
        name: 'travel filters',
        description: 'Worked with classmates to create a web app that recommends travel destinations based on input from users.',
        githubUrl: 'https://github.com/Hunter-College-CSCI-39548-Fall-2018/team6',
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

        description: 'Collaborated with classmates to design and build a real-time and multi-platform jukebox app.',
        githubUrl: 'https://github.com/adrian-stru/the-peoples-jukebox',
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
        name: 'ring sizing',
        description: 'A progressive web app designed for tablets to be used in store to help customers remember their ring sizes.',
        githubUrl: 'https://github.com/adrian-stru/rove-sizing',
        siteUrl: '',
        tags: [
            'pwa',
            'vue',
            'vuex',
            'express',
            'axios',
        ],
    },
    {
        name: 'antara life',
        description: 'Blog and e-commerce store for Antara Life.',
        githubUrl: '',
        siteUrl: 'https://antaralife.com',
        tags: [
            'craft commerce',
            'php',
            'twig',
            'vue',
        ],
    },
    {
        name: 'rove nyc',
        description: 'Custom theme written for rovenyc.com on Shopify.',
        githubUrl: '',
        siteUrl: 'https://www.rovenyc.com',
        tags: [
            'jquery',
            'shopify',
            'html',
            'css',
        ],
    },
    {
        name: 'building better',
        description: 'International art contest for children of Caterpillar Employees.',
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
