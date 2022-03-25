export interface IProject {
    id: number;
    title: string;
    techstack: string;
    category: IProjectCategory;
    image: string;
    projects: string[];
}

export interface IProjectCategory {
    id: number;
    slug: string;
    title: string;
}
