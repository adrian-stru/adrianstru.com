// tslint:disable:max-line-length

interface AboutConfigInterface {
    paragraphs: string[];
    skills: string[];
}

const aboutConfig: AboutConfigInterface = {
   paragraphs: [
    'Hello! I\'m Adrian Struszczyk, a web developer based in Brooklyn, NY. I\'m graduating Hunter College with a Bachelor\'s in Computer Science in Fall 2019.',
    'Recently I launched a blog & ecommerce site for a company called <a href="https://antaralife.com/">Antara Life</a>. Currently I\'m Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    'When I am not programming I enjoy spending time lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
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
