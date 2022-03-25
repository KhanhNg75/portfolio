import { IKnowledge } from "@interfaces/IKnowledge";
import { Title } from "@components/title";

interface Props {
    title: string;
    subtitle: string;
    knowledge: IKnowledge[];
}
export const Knowledge: React.FC<Props> = ({ title, subtitle, knowledge }) => {
    return (
        <>
            <Title title={title} subtitle={subtitle} />
            {knowledge.map((point) => (
                <li key={point.id}>{point.title}</li>
            ))}
        </>
    );
};
