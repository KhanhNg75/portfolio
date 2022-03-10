import styled from "styled-components";

const Description = styled.p`
    font-size: 13px;
    line-height: 23px;
    padding: 0;
    margin: 0;
    white-space: pre-line;
    padding-bottom: 30px;
    border-bottom: 1px solid var(--bd-gray);
`;

const SectionBlock = styled.div`
    position: relative;
    padding: 30px 30px 0;
    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0px;
        width: 1px;
        height: 100%;
        background-color: var(--bd-gray);
    }
    &:first-child {
        padding-top: 0;
    }
    &:last-child {
        margin-top: -1px;
        ${Description} {
            border-bottom: 0px;
        }
    }
`;

const Position = styled.div`
    color: var(--txt-black);
    font-size: 1.5rem;
    font-weight: bold;
`;

const Title = styled.div`
    position: relative;
    margin: 0 0 15px 0;
    font-size: 13px;
    color: var(--txt-black);
`;

export { SectionBlock, Title, Description, Position };
