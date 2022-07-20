import styled from "styled-components"

export const Container = styled.div`
  margin: 5px 10vw 0px 10vw;
  width: 80vw;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #443235;
  }

  h3 {
    margin-top: 20px;
  }
  .contact {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  @media (min-width: 650px) {
    width: 84vw;
    margin: 5vw 8vw 0vw 8vw;
    h3 {
      margin-top: 5vw;
    }
    .contact {
      margin-top: 2vw;
      margin-bottom: 3vw;
    }
  }
`

export const Images = styled.div`
  img {
    margin: 15px 10px 15px 0px;
    width: 40px;
    height: 40px;
  }
  @media (min-width: 450px) {
    img {
      margin: 15px 25px 15px 0px;
      width: 65px;
      height: 65px;
    }
    img:hover {
      width: 70px;
      height: 70px;
    }
  }
`
