import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    /* background-color: var(--bg-primary); */
    background-color: var(--bg-newp-primary);
    border-left: none;
    @media only screen and (min-width: 1200px) {
        padding-left: 350px;
    }
`;

const Content = styled.div`
    width: 100%;
    border-left: none;
    min-height: 100vh;
    @media only screen and (min-width: 1200px) {
        border-left: 1px solid var(--bd-gray);
    }
`;

const Section = styled.div`
    overflow: hidden;
    overflow-y: scroll;
    opacity: 1;
    visibility: visible;
    z-index: 9;
    transition: visibility 1s linear, opacity 0s linear;
`;

const SectionContainer = styled.div`
    max-width: 968px;
    width: 100%;
    padding: 0 1.25rem;
    margin: 0 auto;
`;

export { Container, Content, Section, SectionContainer };
