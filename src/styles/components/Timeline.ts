import styled from "styled-components";

const SectionBlock = styled.div`
    border-left: 2px solid var(--border-color);
    padding-bottom: 30px;
    @media only screen and (min-width: 1200px) {
        display: flex;
    }
`;

const Container = styled.div`
    padding-bottom: 20px;
    ${SectionBlock} {
        &:last-child {
            padding-bottom: 0px;
        }
    }
`;

const BlockLeft = styled.div`
    width: 100%;
    padding-left: 20px;
    position: relative;
    &::before {
        content: "";
        position: absolute;
        left: -9px;
        top: 7px;
        border: 2px solid var(--border-color);
        background-color: var(--bg-newp-primary);
        border-radius: 50%;
        width: 16px;
        height: 16px;
    }
    @media only screen and (min-width: 1200px) {
        width: 20%;
    }
`;

const BlockRight = styled.div`
    padding-left: 20px;
    @media only screen and (min-width: 1200px) {
        width: 70%;
        padding-left: 65px;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: -8px;
            top: 15px;
            width: 3rem;
            height: 2px;
            background-color: var(--border-color);
        }
    }
`;

const Period = styled.p`
    display: inline-block;
`;

const Position = styled.div`
    color: var(--txt-black);
    font-size: 2rem;
    font-weight: bold;
`;

const Title = styled.div`
    position: relative;
    margin: 0 0 15px 0;
    font-size: 1.5rem;
    color: var(--txt-black);
`;

const Description = styled.p`
    font-size: 13px;
    line-height: 23px;
    padding: 0;
    margin: 0;
    white-space: pre-line;
`;

export {
    Container,
    SectionBlock,
    Title,
    Description,
    Position,
    BlockRight,
    BlockLeft,
    Period,
};
