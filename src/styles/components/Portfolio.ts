import styled from "styled-components";

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

const CategoriesItems = styled.span`
    margin-right: 25px;
    font-size: 13px;
    color: rgb(54, 54, 54);
    cursor: pointer;
    transition-duration: 0.3s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: all;
`;

export { Style, Categories, CategoriesItems };
