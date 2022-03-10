import { Title } from "@styles/components/Typography";

interface Props {
    title: string;
}
export const Knowledge: React.FC<Props> = ({ title }) => {
    return (
        <>
            <Title>{title}</Title>
        </>
    );
};
