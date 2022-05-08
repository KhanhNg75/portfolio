import styled, { css } from "styled-components";
import {
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
    typography,
} from "styled-system";

interface IContain {
    padding?: boolean;
    header?: boolean;
    layout?: boolean;
    titleContainer?: boolean;
}

const Container = styled.div<IContain>`
    ${typography};
    ${layout};
    ${flexbox};
    ${space};
    ${({ padding }) =>
        padding &&
        css`
            padding: 6rem 0;
            @media only screen and (min-width: 1200px) {
                padding: 3rem 0 1rem;
            }
        `};
    ${({ header }) =>
        header &&
        css`
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            background: var(--bg-white);
            @media only screen and (min-width: 1200px) {
                width: 350px;
                height: 100vh;
                top: inherit;
                display: flex;
                align-items: center;
            }
        `};
    ${({ layout }) =>
        layout &&
        css`
            width: 100%;
            min-height: 100vh;
            /* background-color: var(--bg-primary); */
            background-color: var(--bg-newp-primary);
            border-left: none;
            @media only screen and (min-width: 1200px) {
                padding-left: 350px;
            }
        `};
    ${({ titleContainer }) =>
        titleContainer &&
        css`
            position: relative;
            z-index: 1;
            padding: 20px 0 50px;
        `};
`;

const GlobalContainer = styled.div``;

export { Container, GlobalContainer };
