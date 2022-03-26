import { IProject } from "@interfaces/IProject";

interface Props {
    project: IProject;
}

export const PortfolioItems: React.FC<Props> = ({ project }) => {
    console.log(project);
    return (
        <>
            <span>aaa</span>
        </>
    );
};
