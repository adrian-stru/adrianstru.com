interface NavItemInterface {
    name: string;
    anchor: string;
}

interface NavConfigInterface {
    links: NavItemInterface[];
}

const navConfig: NavConfigInterface = {
    links: [
        {
            name: 'About',
            anchor: '#about',
        },
        {
            name: 'Work',
            anchor: '#work',
        },
        {
            name: 'Projects',
            anchor: '#projects',
        },
        {
            name: 'Contact',
            anchor: '#contacts',
        },
    ],
};

export { NavConfigInterface as NavConfig, navConfig };
