import styled from "styled-components";

const PortfolioImage = styled.div``;

const Image = styled.img`
    display: block;
    position: relative;
    max-width: none;
    width: calc(100% + 60px);
    transition: opacity 0.35s, transform 0.45s;
    transform: translate3d(-40px, 0, 0);
`;

const PortfolioContent = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    padding: 1.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &::before {
        position: absolute;
        top: 20px;
        right: 20px;
        bottom: 20px;
        left: 20px;
        border: 1px solid #fff;
        content: "";
        opacity: 0;
        filter: alpha(opacity=0);
        transition: opacity 0.35s, transform 0.45s;
        transform: translate3d(-20px, 0, 0);
    }
`;

const Category = styled.p`
    color: var(--txt-white);
    background-color: transparent;
    text-align: center;
    opacity: 0;
    transition: all 0.4s ease-out;
    transform: translateX(80px) translateY(0) translateZ(0) rotate(0deg)
        scale(1);
`;

const Title = styled.h2`
    font-size: 1.563rem;
    text-transform: uppercase;
    color: var(--txt-white);
    opacity: 0;
    transition: opacity 0.35s, transform 0.45s;
    transform: translateX(-70px) translateY(0) translateZ(0) rotate(0deg)
        scale(1);
`;

const Container = styled.div`
    overflow: hidden;
    text-align: center;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.9);
    &:hover {
        ${Image} {
            opacity: 0.2;
            transform: translate3d(0, 0, 0);
        }
        ${Title} {
            opacity: 1;
            transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg)
                scale(1);
        }
        ${PortfolioContent} {
            &::before {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
        ${Category} {
            opacity: 1;
            transform: translateX(0px) translateY(0) translateZ(0) rotate(0deg)
                scale(1);
        }
    }
`;

export { Container, PortfolioImage, Image, PortfolioContent, Category, Title };
