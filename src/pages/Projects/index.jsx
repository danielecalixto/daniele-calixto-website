import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BackToHome from "../../components/BackToHome"

import { Container } from "./styles"

const Projects = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <h2>Projects</h2>
      </Container>
      <BackToHome></BackToHome>
      <Footer></Footer>
    </div>
  )
}

export default Projects
