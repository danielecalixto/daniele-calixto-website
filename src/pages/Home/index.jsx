import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <p>Welcome!</p>
      <Link to="/">
        <button>Contact</button>
      </Link>
    </div>
  )
}

export default Home
