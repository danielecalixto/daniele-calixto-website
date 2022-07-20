import { Link } from "react-router-dom"

import TimeLine from "../../components/TimeLine"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { Container } from "./styles"

const About = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <h2>About Me</h2>
        <TimeLine></TimeLine>
        <div>
          <p>More professional information:</p>
          <button>RESUME</button>
          <button>Linkedin</button>
          <button>GitHub</button>
          <button>Contact</button>
          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default About
