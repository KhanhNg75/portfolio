import { IExperience } from "@interfaces/ITimeline";
import { IProgrammingSkill } from "@interfaces/IProgrammingSkill";
import { IAboutMe } from "@interfaces/IAboutMe";

export const aboutMe: IAboutMe = {
    intro: "Hi, I'm Khanh a website developer from Vietnam, I have a passion for creating a fully functional website. Moreover, I am very interested in learning new knowledge in this field for applying in Wed Developer like ReactJS and TypeScript.",
    age: 25,
    job: "Front-end Developer",
    citizenship: "Vietnam",
    residence: "Saigon",
    email: "baokhanh0705@gmail.com",
    phone: "+447863461770",
};

export const experience: IExperience[] = [
    {
        id: 1,
        period: "10.2020 - 9.2020",
        position: "Front-end Developer",
        company: "Cleverpro",
        description:
            "- Build multiple small websites for Marketing purposes. Used existing design on WordPress and refactored it with HTML, CSS that can boost the main site on the Google Search page.\n- Control the domain, code for all the websites, and fix bugs when having problems.\n- Led on carrying out technical SEO analysis, increasing page load speeds by 50%. Used HTML, CSS to refactor website structure for running faster and have a good score on PageSpeed.",
    },
    {
        id: 2,
        period: "8.2018 - 6.2019",
        position: "Front-end Developer",
        company: "Allgrow-Labo",
        description:
            "- Manage/ Create a new theme in eCommerce sites like WordPress, Shopify. Used HTML, CSS, SASS, JavaScript, JQuery to develop UX.- Used Gulp to control the coding process.\n- CCreated consistent page formatting and functionality across various browser ecosystems (Chrome, Edge, Opera, Safari) in both desktop and mobile.\n- Fix bugs/ feedback/ errors on the site from Clients - report the progress of each day and Clients will give feedback on the next working day.\n- Used Git to push/manage/edit code each day after work.\n- Help colleagues with JavaScript, JQuery problems.\n- Improve/ Develop company's website with HTML, CSS, JavaScript, JQuery.\n- Used PHP to control/ edit WordPress page, code, function from scratch.",
    },
    {
        id: 3,
        period: "6.2017 - 9.2017",
        position: "Internship Front-end Developer",
        company: "Jobo",
        description:
            "- Receive requests from team leaders and fix bugs. Used HTML, CSS to create new function/ code.\n- Improve UI on IOS and Android using Ionic by using HTML, CSS, JavaScript.\n- Manage/ control code version using GitHub.",
    },
];

export const education: IExperience[] = [
    {
        id: 1,
        period: "01.2021 - Present",
        position: "MSc Marketing Communication",
        company: "",
        description: "University Of The West Of England, Bristol, BS16 1QY",
    },
    {
        id: 2,
        period: "09.2019 - 09.2020",
        position: "MSc Information Technology",
        company: "",
        description:
            "University Of The West Of England, Bristol, BS16 1QY\nGraduated with Merit",
    },
    {
        id: 3,
        period: "10.2014 - 11.2019",
        position: "Bachelor in Computer Science and Engineering",
        company: "",
        description: "International University, Saigon, Vietnam\n71.6 GPA",
    },
];

export const program: IProgrammingSkill[] = [
    {
        id: 1,
        title: "JavaScript",
        key: "javascript",
        percent: 55,
    },
    {
        id: 2,
        title: "TypeScript",
        key: "typescript",
        percent: 55,
    },
    {
        id: 3,
        title: "Vue",
        key: "vue",
        percent: 85,
    },
    {
        id: 4,
        title: "Nuxt",
        key: "nuxtjs",
        percent: 85,
    },
    {
        id: 5,
        title: "React",
        key: "react",
        percent: 65,
    },
    {
        id: 6,
        title: "Next",
        key: "nextjs",
        percent: 65,
    },
    {
        id: 7,
        title: "HTML",
        key: "html",
        percent: 80,
    },
    {
        id: 8,
        title: "CSS",
        key: "css",
        percent: 80,
    },
    {
        id: 9,
        title: "SCSS",
        key: "sass",
        percent: 80,
    },
    {
        id: 10,
        title: "Nodejs",
        key: "node",
        percent: 40,
    },
    {
        id: 11,
        title: "Wordpress",
        key: "wordpress",
        percent: 55,
    },
    {
        id: 12,
        title: "Shopify",
        key: "shopify",
        percent: 55,
    },
];

export const softwares: IProgrammingSkill[] = [
    {
        id: 1,
        title: "Vscode",
        key: "vscode",
        percent: 85,
    },
    {
        id: 2,
        title: "SourceTree",
        key: "sourceTree",
        percent: 85,
    },
    {
        id: 3,
        title: "Postman",
        key: "postman",
        percent: 85,
    },
    {
        id: 4,
        title: "Insomnia",
        key: "insomnia",
        percent: 85,
    },
    {
        id: 5,
        title: "Photoshop",
        key: "photoshop",
        percent: 65,
    },
    {
        id: 6,
        title: "Illustrator",
        key: "illustrator",
        percent: 65,
    },
    {
        id: 7,
        title: "XD",
        key: "xd",
        percent: 65,
    },
    {
        id: 8,
        title: "Figma",
        key: "figma",
        percent: 80,
    },
];
