import styled from "styled-components";

const Title = styled.h3`
    font-size: 1.125rem;
    font-weight: 700;
    margin: 3rem 0 1.625rem;
    text-transform: uppercase;
    color: var(--txt-black);
    position: relative;
    &::before {
        position: absolute;
        left: 0;
        top: 0px;
        width: 1px;
        height: 100%;
        background-color: #f5df4e;
    }
`;

export { Title };
