import { IProgrammingSkill } from "@interfaces/IProgrammingSkill";
import { Title } from "@components/title";
import { ProgrammingSkills as P } from "@styles";
import { ICON_MAP } from "src/common/data";

interface Props {
    title: string;
    subtitle: string;
    skills: IProgrammingSkill[];
}

export const ProgrammingSkills: React.FC<Props> = ({
    title,
    subtitle,
    skills,
}) => {
    return (
        <P.Style>
            <Title title={title} subtitle={subtitle} />
            {skills.map((item) => (
                <P.Style>
                    {item.id} - {item.title}
                </P.Style>
            ))}
        </P.Style>
    );
};
