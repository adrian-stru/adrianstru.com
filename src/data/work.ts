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
            title: 'Web Developer',
            company: 'Antara Life',
            url: '',
            startDate: 'May 2018',
            endDate: 'February 2019',
            bullets: [
              'Developed a blog & e-commerce site for a line of herbal supplements',
              'Wrote custom integration to support product subscriptions and shipping fulfillment between cms and third-party services',
              'Simplified technical problems for the designer and the founder to collect requirements and design solutions',
            ],
        },
        {
            title: 'Front-End Developer',
            company: 'Rove NYC',
            url: '',
            startDate: '',
            endDate: 'Fall 2017',
            bullets: [
              'Worked with a designer to create a custom front end for Shopify store for a jewelry brand',
              'Created a progressive web app for in-store use to help customers remember their ring sizes',
            ],
        },
        {
            title: 'Freelance Web Developer',
            company: 'Hyper House',
            url: '',
            startDate: '',
            endDate: 'August 2017',
            bullets: [
              'Launched microsite for an international art contest for children of Caterpillar employees which received hundreds of submissions across different age groups and thousands of votes',
            ],
        },
    ];

export {WorkItemInterface as WorkItem, workConfig};
