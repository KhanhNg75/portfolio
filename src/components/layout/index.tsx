import { Header } from "@components/header";
import { MainFrame as F } from "@styles";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <F.Container>
                    <F.Content>
                        <F.Section>
                            <F.SectionContainer>{children}</F.SectionContainer>
                        </F.Section>
                    </F.Content>
                </F.Container>
            </main>
        </>
    );
};
