import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:0;
        width: 100%;
    }
    
    html{
        height:100%;
       
    }
    
    body{
        height:100%
    }

    #root{
        background-color: #e2e2e2;
        color: #443235;
        height:100%;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        --white: #FFF;
        --black: #000;
        --color-primary-100: #FA8223;
        --color-primary-50: #F79527;
        --color-primary-fading: rgba(247, 149, 39, 0.5);
        --color-secondary-100: #83F3FA;
        --color-secondary-50: #84F6FF80;
        --grey-1: #222428;
        --color-placeholder: #9EA8BD;
        --color-text-box: #FFF3E9;
        --color-error: #F33;
    }

    body,button{
        font-size:16px;
        font-family: 'Nunito', sans-serif;
    }

    h1,h2,h3{
        font-weight: bold;
        font-size: 22px;
    }

    figcaption{
        display: none;
    }

    button{
        cursor:pointer;
    }

    p {
        font-family: "Courier New", Courier, monospace;
        font-size: 12px;
        margin-bottom: 5px;
        line-height: 2;
    }

    h2 {
        font-family: "Courier New", Courier, monospace;
        font-weight: lighter;
        font-size: 22px;
        margin-bottom: 20px;
    }

    h3{
        font-family: "Courier New", Courier, monospace;
        font-weight: lighter;
        font-size: 18px;
        margin-top: 20px;
        margin-bottom: 10px;
    }
`
