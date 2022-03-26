import { IExperience } from "@interfaces/ITimeline";
import { IProgrammingSkill } from "@interfaces/IProgrammingSkill";
import { IAboutMe } from "@interfaces/IAboutMe";
import { IProfessional } from "@interfaces/IProfessional";
import { IProject, IProjectCategory } from "@interfaces/IProject";

import traderByFxLogo from "@assets/images/traderbyfx/traderbyfx-logo.png";
import traderByFx1 from "@assets/images/traderbyfx/traderbyfx-1.png";
import traderByFx3 from "@assets/images/traderbyfx/traderbyfx-3.png";
import traderByFx4 from "@assets/images/traderbyfx/traderbyfx-4.png";
import traderByFx7 from "@assets/images/traderbyfx/traderbyfx-7.png";
import traderByFx9 from "@assets/images/traderbyfx/traderbyfx-9.png";
import traderByFx10 from "@assets/images/traderbyfx/traderbyfx-10.png";
import traderByFx11 from "@assets/images/traderbyfx/traderbyfx-11.png";
import traderByFx12 from "@assets/images/traderbyfx/traderbyfx-12.png";
import traderByFx13 from "@assets/images/traderbyfx/traderbyfx-13.png";

import iconReact from "@assets/images/icon/icon-react.jpg";
import iconreactHover from "@assets/images/icon/icon-react.svg";
import iconNext from "@assets/images/icon/icon-next.jpg";
import iconNextHover from "@assets/images/icon/icon-next.jpg";
import iconHtml from "@assets/images/icon/icon-html.jpg";
import iconHtmlHover from "@assets/images/icon/icon-html.svg";
import iconCss from "@assets/images/icon/icon-css.jpg";
import iconCssHover from "@assets/images/icon/icon-css.svg";
import iconSass from "@assets/images/icon/icon-sass.jpg";
import iconSassHover from "@assets/images/icon/icon-sass.svg";
import iconNode from "@assets/images/icon/icon-node.jpg";
import iconNodeHover from "@assets/images/icon/icon-node.svg";
import iconWordpress from "@assets/images/icon/icon-wordpress.jpg";
import iconWordpressHover from "@assets/images/icon/icon-wordpress.svg";
import iconVscode from "@assets/images/icon/icon-vscode.jpg";
import iconVscodeHover from "@assets/images/icon/icon-vscode.svg";
import iconPostman from "@assets/images/icon/icon-postman.jpg";
import iconPostmanHover from "@assets/images/icon/icon-postman.svg";
import iconPts from "@assets/images/icon/icon-pts.jpg";
import iconPtsHover from "@assets/images/icon/icon-pts.svg";
import iconIllustrator from "@assets/images/icon/icon-illustrator.jpg";
import iconIllustratorHover from "@assets/images/icon/icon-illustrator.svg";
import iconXd from "@assets/images/icon/icon-xd.jpg";
import iconXdHover from "@assets/images/icon/icon-xd.svg";
import iconSourceTree from "@assets/images/icon/icon-sourcetree.jpg";
import iconSourceTreeHover from "@assets/images/icon/icon-sourcetree.svg";
import iconJs from "@assets/images/icon/icon-js.jpg";
import iconJsHover from "@assets/images/icon/icon-js.svg";
import iconTs from "@assets/images/icon/icon-ts.jpg";
import iconTsHover from "@assets/images/icon/icon-ts.svg";

export const ICON_MAP: { [x: string]: string } = {
    react: iconReact,
    reacthover: iconreactHover,
    nextjs: iconNext,
    nextjshover: iconNextHover,
    html: iconHtml,
    htmlhover: iconHtmlHover,
    css: iconCss,
    csshover: iconCssHover,
    sass: iconSass,
    sasshover: iconSassHover,
    node: iconNode,
    nodehover: iconNodeHover,
    wordpress: iconWordpress,
    wordpresshover: iconWordpressHover,
    vscode: iconVscode,
    vscodehover: iconVscodeHover,
    postman: iconPostman,
    postmanhover: iconPostmanHover,
    photoshop: iconPts,
    photoshophover: iconPtsHover,
    illustrator: iconIllustrator,
    illustratorhover: iconIllustratorHover,
    xd: iconXd,
    xdhover: iconXdHover,
    sourceTree: iconSourceTree,
    sourceTreehover: iconSourceTreeHover,
    javascript: iconJs,
    javascripthover: iconJsHover,
    typescript: iconTs,
    typescripthover: iconTsHover,
};

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
        hover: "javascripthover",
    },
    {
        id: 2,
        title: "TypeScript",
        key: "typescript",
        hover: "typescripthover",
    },
    {
        id: 3,
        title: "React",
        key: "react",
        hover: "reacthover",
    },
    {
        id: 4,
        title: "Next",
        key: "nextjs",
        hover: "nextjshover",
    },
    {
        id: 5,
        title: "HTML",
        key: "html",
        hover: "htmlhover",
    },
    {
        id: 6,
        title: "CSS",
        key: "css",
        hover: "csshover",
    },
    {
        id: 7,
        title: "SCSS",
        key: "sass",
        hover: "sasshover",
    },
    {
        id: 8,
        title: "Nodejs",
        key: "node",
        hover: "nodehover",
    },
    {
        id: 9,
        title: "Wordpress",
        key: "wordpress",
        hover: "wordpresshover",
    },
];

export const softwares: IProgrammingSkill[] = [
    {
        id: 1,
        title: "Vscode",
        key: "vscode",
        hover: "vscodehover",
    },
    {
        id: 2,
        title: "SourceTree",
        key: "sourceTree",
        hover: "sourceTreehover",
    },
    {
        id: 3,
        title: "Postman",
        key: "postman",
        hover: "postmanhover",
    },
    {
        id: 4,
        title: "Photoshop",
        key: "photoshop",
        hover: "photoshophover",
    },
    {
        id: 5,
        title: "Illustrator",
        key: "illustrator",
        hover: "illustratorhover",
    },
    {
        id: 6,
        title: "XD",
        key: "xd",
        hover: "xdhover",
    },
];

export const professional: IProfessional[] = [
    {
        id: 1,
        title: "Teamwork",
    },
    {
        id: 2,
        title: "Bootstrap",
    },
    {
        id: 3,
        title: "GIT Source Control",
    },
    // {
    //     id: 4,
    //     title: "Rest API Development",
    // },
    {
        id: 5,
        title: "Performance Optimization",
    },
    {
        id: 6,
        title: "Knowledge of SEO Principles",
    },
    {
        id: 7,
        title: "Problem-solving",
    },
];

export const projectCategories: IProjectCategory[] = [
    {
        id: 1,
        slug: "web-app",
        title: "Web App",
    },
    {
        id: 2,
        slug: "shopify",
        title: "Shopify",
    },
];

export const projects: IProject[] = [
    {
        id: 1,
        title: "Trader",
        techstack: "Micro-frontend, Reactjs, styled-component",
        image: traderByFxLogo,
        category: {
            id: 1,
            slug: "web-app",
            title: "Web App",
        },
        projects: [
            traderByFx1,
            traderByFx3,
            traderByFx4,
            traderByFx7,
            traderByFx9,
            traderByFx10,
            traderByFx11,
            traderByFx12,
            traderByFx13,
        ],
    },
    {
        id: 2,
        title: "Wegonative",
        techstack: "Vuesion, Vuejs, Bootstrap",
        image: "nativeLogo",
        category: {
            id: 2,
            slug: "shopify",
            title: "Shopify",
        },
        projects: [],
    },
    {
        id: 3,
        title: "Wegonative Portal",
        techstack: "Vuejs, Ant Design",
        image: "portfolio3",
        category: {
            id: 1,
            slug: "web-app",
            title: "Web App",
        },
        projects: [],
    },
];
