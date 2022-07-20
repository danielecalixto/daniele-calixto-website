import { Link } from "react-router-dom"
import { Container } from "./styles"

const NavBar = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <hr></hr>
    </Container>
  )
}

export default NavBar
