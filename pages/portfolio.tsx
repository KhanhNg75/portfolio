import { useState } from "react";
import { Portfolio as P } from "@styles";
import { projects as dummyProjects, projectCategories } from "src/common/data";
import { IProject, IProjectCategory } from "@interfaces/IProject";
import StackGrid, { transitions } from "react-stack-grid";
const { scaleUp } = transitions;

const Portfolio: React.FC = () => {
    const [categoryName, setCategoryName] = useState<string>("all");
    const [categories] = useState<IProjectCategory[]>(projectCategories);
    const [projects] = useState<IProject[]>(dummyProjects);

    return (
        <P.Style>
            {categories.length > 0 && (
                <>
                    <span
                        onClick={() => setCategoryName("all")}
                        className={categoryName === "all" ? "active" : ""}
                    >
                        All
                    </span>
                    {projectCategories.map((category) => (
                        <span
                            onClick={() => setCategoryName(category.slug)}
                            key={category.id}
                            className={
                                categoryName === category.slug ? "active" : ""
                            }
                        >
                            {category.title}
                        </span>
                    ))}
                </>
            )}
            <StackGrid
                columnWidth={350}
                appear={scaleUp.appear}
                appeared={scaleUp.appeared}
                enter={scaleUp.enter}
                entered={scaleUp.entered}
                leaved={scaleUp.leaved}
            >
                {projects.map((category, index) => {
                    if (categoryName === "all") {
                        return (
                            <div key={index}>
                                <h4>
                                    {category.title} - {category.category.slug}
                                </h4>
                            </div>
                        );
                    } else if (categoryName === category.category.slug) {
                        return (
                            <div key={index}>
                                <h4>
                                    {category.title} - {category.category.slug}
                                </h4>
                            </div>
                        );
                    }
                })}
            </StackGrid>
        </P.Style>
    );
};
export default Portfolio;
