import { useEffect, useState } from "react";
import { Portfolio as P } from "@styles";
import { projects as dummyProjects, projectCategories } from "src/common/data";
import { IProject, IProjectCategory } from "@interfaces/IProject";
import StackGrid, { transitions } from "react-stack-grid";
import { Title } from "@components/title";
import { PortfolioItems } from "@components/portfolio";
const { scaleUp } = transitions;

const Portfolio: React.FC = () => {
    const [categoryName, setCategoryName] = useState<string>("all");
    const [categories] = useState<IProjectCategory[]>(projectCategories);
    const [projects] = useState<IProject[]>(dummyProjects);
    const [filteredProjects, setFilteredProjects] =
        useState<IProject[]>(projects);
    const filter = (slug: string) => {
        if (slug === "all") {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(
                projects.filter((project) => project.category.slug === slug),
            );
        }
    };
    useEffect(() => {
        filter(categoryName);
    }, [categoryName]);

    return (
        <P.Style>
            <Title title="Portfolio" subtitle="Portfolio" />
            {categories.length > 0 && (
                <P.Categories>
                    <P.CategoriesItems
                        onClick={() => setCategoryName("all")}
                        className={categoryName === "all" ? "active" : ""}
                    >
                        All
                    </P.CategoriesItems>
                    {projectCategories.map((category) => (
                        <P.CategoriesItems
                            onClick={() => setCategoryName(category.slug)}
                            key={category.id}
                            className={
                                categoryName === category.slug ? "active" : ""
                            }
                        >
                            {category.title}
                        </P.CategoriesItems>
                    ))}
                </P.Categories>
            )}
            <StackGrid
                columnWidth={350}
                appear={scaleUp.appear}
                appeared={scaleUp.appeared}
                enter={scaleUp.enter}
                entered={scaleUp.entered}
                leaved={scaleUp.leaved}
            >
                {filteredProjects.map((project, index) => {
                    // if (categoryName === "all") {
                    //     return (
                    //         // <div key={index}>
                    //         //     <h4>
                    //         //         {project.title} - {project.category.slug}
                    //         //     </h4>
                    //         // </div>
                    //         <PortfolioItems
                    //             key={project.id}
                    //             project={project}
                    //         />
                    //     );
                    // } else if (categoryName === project.category.slug) {
                    //     return (
                    //         <PortfolioItems
                    //             key={project.id}
                    //             project={project}
                    //         />
                    //     );
                    // }
                    // console.log(project);

                    <PortfolioItems key={project.id} project={project} />;
                })}
            </StackGrid>
        </P.Style>
    );
};
export default Portfolio;
