import { Link } from "react-router-dom"
import TimeLine from "../../components/TimeLine"

const About = () => {
  return (
    <div>
      <p>About</p>
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
    </div>
  )
}

export default About
