import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        background-color: #e2e2e2;
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
        color: #443235;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
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

    @media (min-width: 650px) {
        h2 {
            font-size: 40px;
        }
        h3 {
            font-size: 35px;
        }
        p {
            font-size: 25px;
        }
    }

`
