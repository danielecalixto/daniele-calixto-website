import styled from "styled-components"

export const Container = styled.div`
  margin: 5px 10vw 0px 10vw;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: left;

  img {
    width: 20px;
    margin-right: 5px;
  }

  a {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
    color: #443235;
  }
  @media (min-width: 650px) {
    width: 84vw;
    margin: 5vw 8vw 0vw 8vw;
    img {
      width: 25px;
      margin-right: 10px;
    }
    a {
      font-size: 15px;
    }
  }
`
