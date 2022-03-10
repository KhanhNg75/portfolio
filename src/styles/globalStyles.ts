import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    --bg-primary: #f8f8f8;
    --bg-white: #fff;
    --bd-gray: #ebebeb;
    --txt-color: #767676;
    --txt-black: #000;
    --txt-gray: #999;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    color: var(--txt-color);
    font-size: 15px;
    line-height: 30px;
    letter-spacing: .5px;
    word-wrap: break-word;
    font-weight: 400;
  }

  html{
    font-family: 'Roboto Mono'; 
    scroll-behavior: smooth;
  }

  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }

  @keyframes morph {
    0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
`;

export default GlobalStyle;
