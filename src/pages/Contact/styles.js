import styled from "styled-components"

export const Container = styled.div`
  margin: 5px 10vw 90vw 10vw;
  width: 80vw;
  p {
    display: flex;
  }
  img {
    width: 25px;
    margin-right: 10px;
  }

  a {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-family: "Courier New", Courier, monospace;

    font-size: 12px;
    color: #443235;
  }
  @media (min-width: 650px) {
    width: 84vw;
    margin: 5vw 8vw 30vw 8vw;
    img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
    a {
      margin-bottom: 30px;
      font-size: 25px;
    }
  }
`
