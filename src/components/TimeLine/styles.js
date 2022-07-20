import styled from "styled-components"

export const Container = styled.div`
  p {
    border-left: 2px solid black;
    padding-left: 10px;
  }
  img {
    width: 40px;
    margin-right: 10px;
  }
  h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: 650px) {
    p {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-left: 20px;
    }
    img {
      width: 50px;
      margin-right: 20px;
    }
    h3 {
      margin-top: 40px;
    }
  }
`
