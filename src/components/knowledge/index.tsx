import { IKnowledge } from "@interfaces/IKnowledge";
import { Title } from "@styles/components/Typography";

interface Props {
    title: string;
    knowledge: IKnowledge[];
}
export const Knowledge: React.FC<Props> = ({ title, knowledge }) => {
    return (
        <>
            <Title>{title}</Title>
            {knowledge.map((point) => (
                <li key={point.id}>{point.title}</li>
            ))}
        </>
    );
};
