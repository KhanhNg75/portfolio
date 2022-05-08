import styled from "styled-components";

const Content = styled.div`
    @media only screen and (min-width: 1200px) {
        display: flex;
    }
`;

const ProfileImage = styled.img`
    height: 230px;
    padding-bottom: 20px;
    object-fit: cover;
    @media only screen and (min-width: 1200px) {
        width: 400px;
        height: 444px;
    }
`;

const Description = styled.div`
    @media only screen and (min-width: 1200px) {
        padding-left: 50px;
    }
`;

const Intro = styled.p`
    font-style: italic;
    padding-bottom: 20px;
    @media only screen and (min-width: 1200px) {
        padding-bottom: 30px;
    }
`;

const Infor = styled.div`
    padding-bottom: 20px;
    @media only screen and (min-width: 1200px) {
        padding-bottom: 30px;
    }
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
    Content,
    ProfileImage,
    Description,
    Intro,
    Infor,
    InforLeft,
    InforRight,
};
