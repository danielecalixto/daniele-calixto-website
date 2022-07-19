import { Logo, Container } from "./styles"
import { Link } from "react-router-dom"
import NavBar from "../NavBar"

const Header = () => {
  return (
    <Container>
      <h1>
        <Link to="/">
          <Logo>Daniele Calixto</Logo>
        </Link>
      </h1>
      <NavBar></NavBar>
    </Container>
  )
}

export default Header
