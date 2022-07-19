import { Logo, Container } from "./styles"
import { Link } from "react-router-dom"
import NavBar from "../NavBar"

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <Logo>
          <p>Daniele Calixto</p>
        </Logo>
      </Link>
      <NavBar></NavBar>
    </Container>
  )
}

export default Header
