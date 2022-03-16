import styled, { css } from "styled-components";

interface IMenuItem {
    active?: boolean;
}

const Container = styled.div`
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
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0.9rem 0 1.25rem;
    @media only screen and (min-width: 1200px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0 3.15rem;
    }
`;

const Logo = styled.h1`
    font-size: 1.5rem;
    color: var(--txt-black);
    @media only screen and (min-width: 1200px) {
        font-size: 1.85rem;
    }
`;

const MenuContainer = styled.div`
    /* padding: 0;
    @media only screen and (min-width: 1200px) {
        padding: 2.5rem 0 3rem;
    } */
`;

const MenuHamburger = styled.div`
    @media only screen and (min-width: 1200px) {
        display: none;
    }
    & svg {
        color: var(--txt-black);
        font-size: 2.5rem;
        position: relative;
        top: 0.25rem;
    }
`;

const MenuContent = styled.ul<IMenuItem>`
    position: fixed;
    top: 50px;
    right: -200px;
    height: 100vh;
    width: 200px;
    z-index: 15;
    background-color: var(--bg-white);
    transition: all 0.3s ease;
    padding: 6.25rem 1.25rem 0;
    text-align: right;
    ${({ active }) =>
        active &&
        css`
            right: 0;
        `};
    @media only screen and (min-width: 1200px) {
        position: inherit;
        top: 0;
        right: 0;
        width: 100%;
        padding: 2.5rem 0 3rem;
        height: auto;
        text-align: left;
    }
`;

const MenuItem = styled.li`
    & a {
        color: var(--txt-color);
        transition: all 0.3s ease;
    }
    & a:hover {
        letter-spacing: 0.25rem;
    }
    &.active {
        & a {
            color: var(--txt-black);
        }
    }
`;

const Copyright = styled.div`
    display: none;
    @media only screen and (min-width: 1200px) {
        display: block;
        font-size: 1rem;
        color: #999;
        line-height: 25px;
        font-style: italic;
        margin: 0 0.635rem 0 0;
    }
`;

export {
    Container,
    Content,
    Logo,
    MenuContainer,
    MenuHamburger,
    MenuContent,
    MenuItem,
    Copyright,
};
