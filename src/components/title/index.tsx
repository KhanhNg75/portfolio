import { Typography as T } from "@styles";
import { Wrapper as W } from "@styles";

interface Props {
    title: string;
    subtitle: string;
}

export const Title: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <W.Container titleContainer>
            <T.Title>
                {title} <T.SubTitle>{subtitle}</T.SubTitle>
            </T.Title>
        </W.Container>
    );
};
