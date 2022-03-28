import styled from "styled-components";
interface IPortfolioItem {
    active?: boolean;
}

const Style = styled.div`
    padding: 6rem 0;
    @media only screen and (min-width: 1200px) {
        padding: 3rem 0 1rem;
    }
`;

const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
`;

const CategoriesItems = styled.span<IPortfolioItem>`
    margin-right: 25px;
    font-size: 0.9rem;
    color: rgba(25, 29, 43, 0.55);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        color: #191d2b;
        letter-spacing: 0.25rem;
    }
    &.active {
        color: #191d2b;
    }
`;

export { Style, Categories, CategoriesItems };
