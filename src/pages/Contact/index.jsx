import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { Container } from "./styles"

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <h2>Contact</h2>
        <p>
          <img
            alt="Email"
            src="https://img.icons8.com/ios/60/000000/send-mass-email.png"
          />
          danielecalixtob@gmail.com
        </p>
        <a href="https://www.linkedin.com/in/daniele-calixto-barros/">
          <img
            alt="Linkedin"
            src="https://img.icons8.com/ios/50/000000/linkedin.png"
          />
          daniele-calixto-barros
        </a>
        <a href="https://github.com/danielecalixto">
          <img
            className="git"
            alt="GitHub"
            src="https://img.icons8.com/material-outlined/60/000000/github.png"
          />
          danielecalixto
        </a>
        <a href="https://drive.google.com/file/d/1o-BilCm9RhX8F0tIHpMZb6pTYc7wJhH9/view?usp=sharing">
          RESUME - English
        </a>
        <a href="https://drive.google.com/file/d/1DfoThBezmi8OUGDZ09KbMLSXegiC1RkK/view?usp=sharing">
          CURRÍCULO - Português
        </a>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Contact
