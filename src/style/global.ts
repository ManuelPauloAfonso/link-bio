import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width: 1080px) {
        font-size: 93.76%;
    }
    @media (max-width: 1080px) {
        font-size: 87.6%;
    }
}
body {
    -webkit-font-smoothing: antialiased;
    font-family: 'DM Sans', sans-serif;
    background-color: #F7F7F7;
}
body input, textarea, button{
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
} 
button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
a{
    text-decoration: none;
    color: #030B1A;
}
ul, li{
    list-style: none;
}
`