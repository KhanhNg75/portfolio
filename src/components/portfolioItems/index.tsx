import { IProject } from "@interfaces/IProject";
import { PortfolioItems as P } from "@styles";

interface Props {
    project: IProject;
}

export const PortfolioItems: React.FC<Props> = ({ project }) => {
    return (
        <P.Container>
            <P.PortfolioImage>
                <P.Image src={project.image} alt={project.title} />
            </P.PortfolioImage>
            <P.PortfolioContent>
                <P.Title>{project.title}</P.Title>
                <P.Category>{project.category.title}</P.Category>
            </P.PortfolioContent>
        </P.Container>
    );
};
