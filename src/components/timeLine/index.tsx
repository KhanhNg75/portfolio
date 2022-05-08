import { IExperience } from "@interfaces/ITimeline";
import { Title } from "@components/title";
import { Timeline as T } from "@styles";

interface Props {
    title: string;
    subtitle: string;
    timelineItems: IExperience[];
}

export const Timeline: React.FC<Props> = ({
    title,
    subtitle,
    timelineItems,
}) => {
    return (
        <T.Container>
            <Title title={title} subtitle={subtitle} />
            {timelineItems.map((item) => (
                <T.SectionBlock key={item.id}>
                    <T.BlockLeft>
                        <T.Period>{item.period}</T.Period>
                    </T.BlockLeft>
                    <T.BlockRight>
                        <T.Position>{item.position}</T.Position>
                        <T.Title>{item.company}</T.Title>
                        <T.Description>{item.description}</T.Description>
                    </T.BlockRight>
                </T.SectionBlock>
            ))}
        </T.Container>
    );
};
