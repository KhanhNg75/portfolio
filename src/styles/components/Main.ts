import styled from "styled-components";
// import profilePhoto from "@assets/images/profile.jpeg";

const Style = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media only screen and (min-width: 1024px) {
        flex-direction: row;
    }
`;

const Avatar = styled.div`
    position: relative;
    border-radius: 100%;
    margin-bottom: 1.875rem;
    min-width: 12.5rem;
    min-height: 12.5rem;
`;

const Image = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    animation: morph 8s ease-in-out infinite 1s;
    background-blend-mode: multiply;
    box-shadow: inset 0 0 0 9px rgb(255 255 255 / 30%);
    background-image: url("/static/images/profile.jpeg");
`;

const Details = styled.div`
    @media only screen and (min-width: 1024px) {
        margin-left: 5rem;
    }
`;

const Name = styled.h3`
    font-weight: 800;
    font-size: 1.875rem;
    text-transform: uppercase;
    margin-bottom: 0.875rem;
    color: var(--txt-black);
    @media only screen and (min-width: 1024px) {
        margin-bottom: 0.625rem;
        font-size: 3rem;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    justify-content: center;
`;

const IconMedia = styled.a`
    display: inline-block;
    margin-right: 0.5rem;
    & svg {
        color: var(--txt-black);
    }
`;

export {
    Style,
    Container,
    Avatar,
    Image,
    Details,
    Name,
    SocialMedia,
    IconMedia,
};
