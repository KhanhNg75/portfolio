import styled from "styled-components";

const Style = styled.div``;

const SkillsBlock = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 50px;
    padding: 0 30px 48px;
`;

const SkillsItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgb(134 151 168 / 10%) 0px 4px 8px;
    border: 1px solid rgb(238, 238, 238);
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
    transition: all 0.3s ease 0s;
    user-select: none;
    padding: 10px;
    &:hover {
        box-shadow: 0 10px 28px rgb(0 0 0 / 20%);
    }
`;

const SkillsImg = styled.img`
    width: 46px;
    height: 46px;
    object-fit: contain;
    margin-bottom: 10px;
`;

const SkillsTitle = styled.span`
    font-size: 0.688rem;
    font-weight: 500;
    color: var(--txt-black);
`;

export { Style, SkillsBlock, SkillsItems, SkillsImg, SkillsTitle };
