import { useState, useEffect } from "react";
import { Portfolio as P } from "@styles";
import { Title } from "@components/title";
import { PortfolioItems } from "@components/portfolioItems";
import { projects as dummyProjects, projectCategories } from "src/common/data";
import { IProject, IProjectCategory } from "@interfaces/IProject";
import StackGrid, { transitions, easings } from "react-stack-grid";
const transition = transitions.scaleDown;
import { useMediaQuery } from "react-responsive";

const Portfolio: React.FC = () => {
    const [categories] = useState<IProjectCategory[]>(projectCategories);
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [projects] = useState<IProject[]>(dummyProjects);
    const [filteredProjects, setFilteredProjects] =
        useState<IProject[]>(projects);
    const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
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
        filter(selectedCategory);
    }, [selectedCategory]);
    return (
        <P.Style>
            <Title title="Portfolio" subtitle="Portfolio" />
            {categories.length > 0 && (
                <P.Categories>
                    <P.CategoriesItems
                        onClick={() => setSelectedCategory("all")}
                        className={selectedCategory === "all" ? "active" : ""}
                    >
                        All
                    </P.CategoriesItems>
                    {projectCategories.map((category) => (
                        <P.CategoriesItems
                            onClick={() => setSelectedCategory(category.slug)}
                            key={category.id}
                            className={
                                selectedCategory === category.slug
                                    ? "active"
                                    : ""
                            }
                        >
                            {category.title}
                        </P.CategoriesItems>
                    ))}
                </P.Categories>
            )}
            <StackGrid
                monitorImagesLoaded
                columnWidth={isMobile ? "100%" : isTablet ? "50%" : "30%"}
                duration={600}
                gutterWidth={15}
                gutterHeight={15}
                easing={easings.cubicOut}
                appearDelay={60}
                appear={transition.appear}
                appeared={transition.appeared}
                enter={transition.enter}
                entered={transition.entered}
                leaved={transition.leaved}
            >
                {filteredProjects.map((project, index) => (
                    <PortfolioItems key={project.id} project={project} />
                ))}
            </StackGrid>
        </P.Style>
    );
};

export default Portfolio;
