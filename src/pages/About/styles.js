import styled from "styled-components"

export const Container = styled.div`
  margin: 5px 10vw 0px 10vw;
  width: 80vw;
  a {
    margin-left: 10px;
    text-decoration: none;
    font-weight: bold;
    color: #443235;
  }
  .contact {
    margin-top: 15px;
    width: 50px;
  }
  p {
    margin-top: 25px;
  }

  @media (min-width: 650px) {
    width: 84vw;
    margin: 5vw 8vw 0vw 8vw;
    h3 {
      margin-top: 1vw;
    }
    h2 {
      margin-bottom: 50px;
    }
    .contact {
      width: 70px;
    }
  }
`
