import styled from "styled-components";

const CategoriesItems = styled.span`
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

export { CategoriesItems };
