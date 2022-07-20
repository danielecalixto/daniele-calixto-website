import styled from "styled-components"

export const Container = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap");
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 5px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    text-align: center;
    font-family: "Source Code Pro", monospace;
    font-size: 15px;
  }
  a {
    text-decoration: none;
    color: #443235;
  }

  @media (min-width: 450px) {
    margin-top: 20px;
    margin-bottom: 10px;
    ul {
      font-size: 25px;
    }
  }
`
