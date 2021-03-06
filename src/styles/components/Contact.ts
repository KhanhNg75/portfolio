import styled from "styled-components";

const ContactItems = styled.div`
    box-shadow: 0 20px 40px rgb(0 0 0 / 20%);
    padding: 10px;
    width: 100%;
    background-color: #fff;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContactTitle = styled.h2`
    text-transform: uppercase;
    font-size: 1rem;
    color: #333333;
`;

const ContactContent = styled.p``;

const ContactForm = styled.div`
    button {
        background-color: #333333;
        padding: 9px 40px 14px;
        font-style: italic;
        &:hover {
            background-color: #333333;
        }
    }
`;

const InputGroup = styled.div`
    margin: 0 0 30px;
    textarea {
        height: 120px;
        resize: none;
    }
    input,
    textarea {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.2);
        background-color: transparent;
        font-style: italic;
        padding: 20px 10px;
    }
`;

const SubmmitBtn = styled.button``;

export {
    ContactItems,
    ContactTitle,
    ContactContent,
    ContactForm,
    InputGroup,
    SubmmitBtn,
};
