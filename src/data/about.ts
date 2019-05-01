// tslint:disable:max-line-length

interface AboutConfigInterface {
    paragraphs: string[];
    skills: string[];
}

const aboutConfig: AboutConfigInterface = {
   paragraphs: [
    'Hello! I\'m Adrian Struszczyk, a web developer based in Brooklyn, NY. I\'m graduating Hunter College with a Bachelor\'s in Computer Science in Fall 2019.',
    'Recently, I created a blog & e-commerce site for a company called <a class="text-grey-lighter" href="https://antaralife.com/" target="_blank">Antara Life</a>. Currently, I\'m preparing for interviews, studying, and working on side projects.',
    'When I am not programming I enjoy listening to <a href="https://www.breaker.audio/u/adrianstru" target="_blank">podcast</a> and <a href="https://www.mixcloud.com/adrianstru/" target="_blank">music</a>, reading stuff on the internet, and spending time with friends.',
    'Below are a few things I have some experience with:',
   ],
   skills: [
    'Javascript',
    'Typescript',
    'Vue',
    'React',
    'Node.js',
    'Express',
   ],
};

export {AboutConfigInterface as AboutConfig, aboutConfig};
