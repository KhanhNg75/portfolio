import { IProgrammingSkill } from "@interfaces/IProgrammingSkill";
import { Title } from "@components/title";
import { ProgrammingSkills as P } from "@styles";
import { ICON_MAP } from "src/common/data";
import reactHover from "@assets/images/icon/icon-react.svg";

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
            <P.SkillsBlock>
                {skills.map((item) => (
                    <P.SkillsItems key={item.id}>
                        <P.SkillsImg
                            src={ICON_MAP[item.key]}
                            alt={item.title}
                            onMouseOver={(e) =>
                                (e.currentTarget.src = ICON_MAP[item.hover])
                            }
                            onMouseOut={(e) =>
                                (e.currentTarget.src = ICON_MAP[item.key])
                            }
                        />
                        <P.SkillsTitle>{item.title}</P.SkillsTitle>
                    </P.SkillsItems>
                ))}
            </P.SkillsBlock>
        </P.Style>
    );
};
