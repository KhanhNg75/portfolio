import React from "react";
import { AppProps } from "next/app";
import { StyledThemeProvider } from "@definitions/styled-components";
import { appWithTranslation } from "@i18n";
import GlobalStyle from "@styles/globalStyles";
import { Layout } from "@components/layout";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <StyledThemeProvider>
            <GlobalStyle />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </StyledThemeProvider>
    );
}

export default MyApp;
