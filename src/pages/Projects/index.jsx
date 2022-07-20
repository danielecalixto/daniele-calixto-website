import { Link } from "react-router-dom"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { Container } from "./styles"

const Projects = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <h2>Projects</h2>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Projects
