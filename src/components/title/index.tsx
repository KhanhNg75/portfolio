import { Typography as T } from "@styles";

interface Props {
    title: string;
    subtitle: string;
}

export const Title: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <T.Style>
            <T.Title>
                {title} <T.SubTitle>{subtitle}</T.SubTitle>
            </T.Title>
        </T.Style>
    );
};
