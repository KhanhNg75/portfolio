import styled from "styled-components";

const Style = styled.div`
    position: relative;
    z-index: 1;
    padding: 20px 0 50px;
`;

const Title = styled.h2`
    /* margin: 3rem 0 1.625rem;
    text-transform: uppercase;
    position: relative;
    &::before {
        position: absolute;
        left: 0;
        top: 0px;
        width: 1px;
        height: 100%;
        background-color: #f5df4e;
    } */
    color: #191d2b;
    font-size: 2rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.7rem;
    /* &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 7.2rem;
        height: 0.33rem;
        background-color: var(--bg-light-color-2);
        border-radius: 15px;
    }
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 3.5rem;
        height: 0.33rem;
        background-color: #007bff;
        border-radius: 15px;
    } */
`;

const SubTitle = styled.span`
    font-weight: 700;
    font-size: 2.95rem;
    color: rgba(25, 29, 43, 0.55);
    position: absolute;
    left: 0;
    top: 56%;
    z-index: -1;
`;

export { Style, Title, SubTitle };
