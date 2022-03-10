import { IProgrammingSkill } from "@interfaces/IProgrammingSkill";
import { Title } from "@styles/components/Typography";
import { ProgrammingSkills as P } from "@styles";

interface Props {
    title: string;
    skills: IProgrammingSkill[];
}

export const ProgrammingSkills: React.FC<Props> = ({ title, skills }) => {
    return (
        <P.Style>
            <Title>{title}</Title>
            {skills.map((item) => (
                <P.Style>{item.id}</P.Style>
            ))}
        </P.Style>
    );
};
