import { Header } from "@components/header";
import { MainFrame as F } from "@styles";
import { Wrapper as W } from "@styles";

export const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                <W.Container layout>
                    <F.Content>
                        <F.Section>
                            <F.SectionContainer>{children}</F.SectionContainer>
                        </F.Section>
                    </F.Content>
                </W.Container>
            </main>
        </>
    );
};
