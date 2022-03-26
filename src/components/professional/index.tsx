import { IProfessional } from "@interfaces/IProfessional";
import { Title } from "@components/title";
import { Professional as P } from "@styles";

interface Props {
    title: string;
    subtitle: string;
    professional: IProfessional[];
}
export const Professional: React.FC<Props> = ({
    title,
    subtitle,
    professional,
}) => {
    return (
        <P.Style>
            <Title title={title} subtitle={subtitle} />
            <P.ProfessionalBlock>
                {professional.map((item) => (
                    <P.ProfessionalItems key={item.id}>
                        {item.title}
                    </P.ProfessionalItems>
                ))}
            </P.ProfessionalBlock>
        </P.Style>
    );
};
