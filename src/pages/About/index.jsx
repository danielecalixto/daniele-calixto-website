import TimeLine from "../../components/TimeLine"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BackToHome from "../../components/BackToHome"

import { Container } from "./styles"

const About = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <h2>About Me</h2>
        <TimeLine></TimeLine>
        <div>
          <p>
            More professional information?
            <a href="https://drive.google.com/file/d/1o-BilCm9RhX8F0tIHpMZb6pTYc7wJhH9/view?usp=sharing">
              My Resume.
            </a>
          </p>
          <p>
            - Currículo em
            <a href="https://drive.google.com/file/d/1v4vdQsY_1jTIbnSGg23PjySPj0qKur8O/view?usp=sharing">
              Português.
            </a>
          </p>
          <a href="https://www.linkedin.com/in/daniele-calixto-barros/">
            <img
              className="contact"
              alt="Linkedin"
              src="https://img.icons8.com/glyph-neue/60/000000/linkedin-circled.png"
            />
          </a>
          <a href="https://github.com/danielecalixto">
            <img
              className="contact"
              alt="GitHub"
              src="https://img.icons8.com/fluency/60/000000/github.png"
            />
          </a>
        </div>
      </Container>
      <BackToHome></BackToHome>
      <Footer></Footer>
    </div>
  )
}

export default About
