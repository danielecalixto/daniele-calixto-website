import styled from "styled-components"

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap");
  display: flex;
  flex-direction: column;
  p {
    font-family: "Source Code Pro", monospace;
    font-size: 15px;
    text-align: center;
    margin: 5px 5px;
  }
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const Logo = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap");
  p {
    margin-top: 10px;
    font-family: "Source Code Pro", monospace;
    font-size: 50px;
    font-weight: lighter;
  }
  border: none;
  background: transparent;
`
