// tslint:disable: max-line-length

interface WorkItemInterface {
  title: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

const workConfig: WorkItemInterface[] = [
        {
            title: 'Freelance Developer',
            company: 'Antara Life',
            url: '',
            startDate: 'May 2018',
            endDate: 'February 2019',
            bullets: [
              'Developed company\'s fully responsive blog & e-commerce shop using Javascript, Vue, and Php',
              'Wrote custom integration to support product subscriptions and shipping fulfillment between between the content management system and third-party APIs',
              'Simplified technical problems for the designer and the founder to collect requirements and design solutions',
            ],
        },
        {
            title: 'Freelance Developer',
            company: 'Rove NYC',
            url: '',
            startDate: '',
            endDate: 'Fall 2017',
            bullets: [
              'Interfaced with a designer to create a custom front end for Shopify store for a jewelry brand using JavaScript, jQuery, HTML, and Sass',
              'Created a progressive web app for in-store use to help customers remember their ring sizes',
            ],
        },
        {
            title: 'Freelance Developer',
            company: 'Hyper House',
            url: '',
            startDate: '',
            endDate: 'Fall 2017',
            bullets: [
              'Built and shipped fully responsive microsite for an international art contest for children of Caterpillar employees',
              'Developed web application where participants can submit artwork which was vetted by moderators and then voted on',
              'Project received hundreds of submissions across different age groups and thousands of votes all around the world',
            ],
        },
    ];

export {WorkItemInterface as WorkItem, workConfig};
