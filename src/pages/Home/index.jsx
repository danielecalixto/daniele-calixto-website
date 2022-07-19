import { Link } from "react-router-dom"
import Header from "../../components/Header"
import SideBar from "../../components/SideBar"
import { Container } from "./styles"

const Home = () => {
  return (
    <Container>
      <Header />
      <p>Welcome!</p>
      <Link to="/">
        <button>Contact</button>
      </Link>
    </Container>
  )
}

export default Home
