// tslint:disable: max-line-length
interface ContactItemIterface {
    name: string;
    link: string;
    newTab: boolean;
}

interface IntroConfigInterface {
    heading: {
        greeting: string,
        headline: string,
        tagline: string,
    };
    paragraphs: string[];
    contact: ContactItemIterface[];
    coordinates: string;
    mousemove: {
        delay: number,
        tweenDuration: number,
    };
    sphere: {
        rotation: {
            x: number,
            y: number,
            z: number,
        },
    };
}

const introConfig: IntroConfigInterface = {
    heading: {
        greeting: 'Hello',
        headline: 'I\'m Adrian Struszczyk',
        tagline: 'I build things with my keyboard',
    },
    paragraphs: [
        'I am currently a last year student at CUNY Hunter studying Computer Science with a passion for web technologies and software craftsmanship.',
    ],
    contact: [
        {
            name: 'Github',
            link: 'https://github.com/adrian-stru',
            newTab: true,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/adrianstru',
            newTab: true,
        },
        {
            name: 'Email',
            link: 'mailto:adrianstru@gmail.com',
            newTab: false,
        },
    ],
    coordinates: '[40.6782, -73.9442]',
    mousemove: {
        delay: 8,
        tweenDuration: 30,
    },
    sphere: {
        rotation: {
            x: 0.03125,
            y: 0.03125,
            z: 0,
        },
    },
};

export {IntroConfigInterface as IntroConfig, introConfig};
