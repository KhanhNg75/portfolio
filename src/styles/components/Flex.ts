import styled, { css } from "styled-components";
import {
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps,
} from "styled-system";

interface IContainer extends FlexboxProps, LayoutProps, SpaceProps {
    home?: boolean;
    homeContainer?: boolean;
    headerContent?: boolean;
}

const Flex = styled.div<IContainer>`
    display: flex;
    ${flexbox};
    ${layout};
    ${space};
    ${({ home }) =>
        home &&
        css`
            min-height: 100vh;
        `};
    ${({ homeContainer }) =>
        homeContainer &&
        css`
            flex-direction: column;
            text-align: center;
            @media only screen and (min-width: 1024px) {
                flex-direction: row;
            }
        `};
    ${({ headerContent }) =>
        headerContent &&
        css`
            width: 100%;
            padding: 0 0.9rem 0 1.25rem;
            @media only screen and (min-width: 1200px) {
                flex-direction: column;
                align-items: flex-start;
                padding: 0 3.15rem;
            }
        `};
`;

export { Flex };
