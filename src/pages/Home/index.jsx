import { Link } from "react-router-dom"

import Header from "../../components/Header"
import Footer from "../../components/Footer"

import { Container, Images } from "./styles"

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <h2>Hi, I'm Daniele!</h2>
        <p>I'm a Web Full Stack Developer passionate about Back End.</p>
        <p>
          I love to write about what I'm learning, so you can learn with me on{" "}
          <Link to="/articles">articles</Link> and see how I use this knowledge
          on <Link to="/projects">projects</Link>.
        </p>
        <p className="contact">
          More details? <Link to="/about">Click here.</Link>
        </p>
        <h3>SKILLS</h3>
        <Images>
          <img
            alt="javascript"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
          <img
            alt="python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
          <img
            alt="git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
          />
          <img
            alt="nodejs"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
          <img
            alt="express nodejs"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
          />
          <img
            alt="django"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
          />
          <img
            alt="docker"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
          />
          <img
            alt="postgreSQL"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          />
          <img
            alt="sqlite"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
          />
          <img
            alt="mongodb"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />
          <img
            alt="aws"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />
          <img
            alt="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
          <img
            alt="html"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          />
          <img
            alt="css"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          />
        </Images>

        <p className="contact">
          You can reach me in English or Portuguese.{" "}
          <Link to="/contact">Let's talk?</Link>
        </p>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Home
