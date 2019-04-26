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
        githubUrl: 'https://github.com/adrian-stru/adrianstru.com',
        siteUrl: '',
        tags: [
            'vue',
            'webgl',
            'three.js',
        ],
    },
    {
        name: 'summers-left',
        description: 'Small webapp that shows how many summers you have remaining',
        githubUrl: '',
        siteUrl: '',
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

        description: 'Collaborated with team to design and build a real-time and multi-platform jukebox app. I was responsible for building the backend api using a combination of HTTP and WebSockets.',
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
        description: 'A progressive web app meant to be used on a iPad in store to help customers remember their ring sizes.',
        githubUrl: 'https://github.com/adrian-stru/rove-sizing',
        siteUrl: '',
        tags: [
            'pwa',
            'vue',
            'vuex',
            'express',
            'axios'
        ],
    },
    {
        name: 'antara life',
        description: 'Ecommerce & blog for antaralife.com',
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
        description: 'Custom theme written for rovenyc.com on Shopify',
        githubUrl: '',
        siteUrl: 'https://www.rovenyc.com',
        tags: [
            'vue',
            'jquery',
            'shopify',
            'html',
            'scss',
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
