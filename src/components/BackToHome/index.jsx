import { Link } from "react-router-dom"
import { Container } from "./styles"

const BackToHome = () => {
  return (
    <Container>
      <Link to="/contact">
        <img
          alt="Talk"
          src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/60/000000/external-talk-chat-flatart-icons-outline-flatarticons.png"
        />
        Contact me.
      </Link>
      <Link to="/">
        <img
          alt="Home"
          src="https://img.icons8.com/ios/50/000000/back--v1.png"
        />
        Home
      </Link>
    </Container>
  )
}

export default BackToHome
