import styled from "styled-components"

export const Container = styled.div`
  margin: 5px 10vw 50px 10vw;
  width: 80vw;
  h3 {
    font-size: 20px;
    margin-top: 40px;
  }
  .title {
    font-size: 17px;
    font-weight: bold;
  }
  .detail {
    margin: 0;
    font-size: 10px;
  }
  .project-box {
    margin: 5px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    a {
      margin-top: 5px;
      text-decoration: none;
      font-size: 12px;
      color: black;
      font-weight: bold;
    }
  }

  @media (min-width: 650px) {
    width: 84vw;
    margin: 5vw 8vw 0vw 8vw;
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    p {
      font-size: 17px;
    }
    h3 {
      font-size: 25px;
    }

    .title {
      font-size: 20px;
    }
    .detail {
      font-size: 14px;
    }
    .project-box {
      margin: 10px;
      width: 430px;
      height: 230px;
      a {
        margin-top: 10px;
        font-size: 15px;
      }
    }
  }
`
