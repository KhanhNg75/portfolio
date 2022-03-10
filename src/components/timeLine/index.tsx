import { IExperience } from "@interfaces/ITimeline";
import { Title } from "@styles/components/Typography";
import { Timeline as T } from "@styles";

interface Props {
    title: string;
    timelineItems: IExperience[];
}

export const Timeline: React.FC<Props> = ({ title, timelineItems }) => {
    return (
        <>
            <div>
                <Title>{title}</Title>
                {timelineItems.map((item) => (
                    <T.SectionBlock key={item.id}>
                        <T.Position>{item.position}</T.Position>
                        <T.Title>
                            {item.company}
                            {item.company ? " / " : ""}
                            {item.period}
                        </T.Title>
                        <T.Description>{item.description}</T.Description>
                    </T.SectionBlock>
                ))}
            </div>
        </>
    );
};
