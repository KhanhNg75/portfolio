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
    --bg-newp-primary: #f2f3f7;
    --bg-primary: #f8f8f8;
    --bg-white: #fff;
    --bd-gray: #ebebeb;
    --txt-color: #767676;
    --txt-black: #000;
    --txt-gray: #999;
    --txt-white: #fff;
    --bg-light-color-2: rgba(3,127,255,.3);
    --border-color: #2e344e;
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

  @keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
    }
  }


  .preloader{
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 99999;
    display: flex;
    animation: cssAnimation 0s ease-in 1s forwards;
    animation-fill-mode: forwards;
  }
  .preloader:before,
  .preloader:after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 50%;
      height: 100%;
      z-index: -1;
      background-color: #000;
      -webkit-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      transition: all 0.3s ease 0s;
  }
  .preloader:after{
      left: auto;
      right: 0;
  }
  .preloader .loader_line{
      margin: auto;
      width: 1px;
      height: 250px;
      position: relative;
      overflow: hidden;
      -webkit-transition: all 0.8s ease 0s;
      -o-transition: all 0.8s ease 0s;
      transition: all 0.8s ease 0s;
  }
  .loader_line:before{
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      width: 1px;
      height: 0%;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
      background-color: #fff;
      -webkit-animation: lineheight 1000ms ease-in-out 0s forwards;
      -o-animation: lineheight 1000ms ease-in-out 0s forwards;
      animation: lineheight 1000ms ease-in-out 0s forwards;
  }
  .loader_line:after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 1px;
      height: 100%;
      background-color: #999999;
      -webkit-transform: translateY(-100%);
      -ms-transform: translateY(-100%);
      -o-transform: translateY(-100%);
      transform: translateY(-100%);
      -webkit-animation: lineround 1200ms linear 0s infinite;
      -o-animation: lineround 1200ms linear 0s infinite;
      animation: lineround 1200ms linear 0s infinite;
      animation-delay: 2000ms;
  }

  @keyframes lineheight{
      0%{
          height: 0%;
      }
      100%{
          height: 100%;
      }
  }

  @keyframes lineround{
      0%{
          -webkit-transform: translateY(-100%);
          -ms-transform: translateY(-100%);
          -o-transform: translateY(-100%);
          transform: translateY(-100%);
      }
      100%{
          -webkit-transform: translateY(200%);
          -ms-transform: translateY(200%);
          -o-transform: translateY(200%);
          transform: translateY(200%);
      }
  }

  /*hiding all*/
  .preloaded .loader_line:after{
      opacity: 0;
  }
  .preloaded  .loader_line{
      opacity: 0;
      height: 100%!important;
  }
  .preloaded:before,
  .preloaded:after{
      -webkit-animation: preloadedzero 300ms ease-in-out 500ms forwards;
      -o-animation: preloadedzero 300ms ease-in-out 500ms forwards;
      animation: preloadedzero 300ms ease-in-out 500ms forwards;
  }
  @keyframes preloadedzero{
      0%{
          width: 50%;
      }
      100%{
          width: 0%;
      }
  }
`;

export default GlobalStyle;
