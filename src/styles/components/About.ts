import styled from "styled-components";

const Style = styled.div``;

const Image = styled.div`
    height: 230px;
    position: relative;
    margin-bottom: 3rem;
    @media only screen and (min-width: 1200px) {
        height: 444px;
    }
`;

const Desc = styled.div`
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: 1200px) {
        flex-direction: row;
    }
`;

// const Title = styled.h3`
//     font-size: 1.125rem;
//     font-weight: 700;
//     margin: 3rem 0 1.625rem;
//     text-transform: uppercase;
//     color: var(--txt-black);
//     position: relative;
//     &::before {
//         position: absolute;
//         left: 0;
//         top: 0px;
//         width: 1px;
//         height: 100%;
//         background-color: #f5df4e;
//     }
// `;

const Intro = styled.p`
    margin-bottom: 2.188rem;
    font-style: italic;
    @media only screen and (min-width: 1200px) {
        width: 55%;
        padding-right: 50px;
    }
`;

const Infor = styled.div`
    @media only screen and (min-width: 1200px) {
        width: 45%;
        padding-left: 50px;
    }
`;

const InforItem = styled.div`
    display: flex;
`;

const InforLeft = styled.p`
    min-width: 7.5rem;
    display: inline-block;
    font-weight: 700;
    color: var(--txt-black);
    font-style: italic;
`;

const InforRight = styled.p``;

export {
    Style,
    Image,
    Desc,
    // Title,
    Intro,
    Infor,
    InforItem,
    InforLeft,
    InforRight,
};
