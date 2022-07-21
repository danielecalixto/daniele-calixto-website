import Header from "../../components/Header"
import Footer from "../../components/Footer"
import BackToHome from "../../components/BackToHome"

import { Container } from "./styles"

const Projects = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <h2>Projects</h2>
        <h3>This Website</h3>
        <li className="project-box">
          <p className="title">danielecalixto.com</p>
          <p className="description">My portfolio.</p>
          <a href="https://github.com/danielecalixto/daniele-calixto-website">
            source
          </a>
        </li>
        <h3>Back End</h3>
        <ul>
          <li className="project-box">
            <p className="title">Cinema</p>
            <p className="description">
              API to manage cinemas with users, managers, movies, movie
              theaters, sessions and purchase.
            </p>
            <a href="https://github.com/kenzie-academy-m5-t9-g14/cinema-api">
              source
            </a>
            <p className="detail">
              Developed in group during Kenzie Academy course.
            </p>
          </li>
          <li className="project-box">
            <p className="title">Shop</p>
            <p className="description">
              API to manage a shop with products, sellers and buyers.
            </p>
            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/m5-sprint5-komercio-danielecalixto">
              source
            </a>
            <p className="detail">Developed during Kenzie Academy course.</p>
          </li>
          <li className="project-box">
            <p className="title">Movie Review</p>
            <p className="description">
              API to manage movies and critics reviews.
            </p>
            <a href="https://github.com/danielecalixto/movies-reviews-api">
              source
            </a>
            <p className="detail">Developed during Kenzie Academy course.</p>
          </li>
          <li className="project-box">
            <p className="title">PetShop</p>
            <p className="description">
              Simple API to register animals and its characteristics for a pet
              shop.
            </p>
            <a href="https://github.com/danielecalixto/pet-shop">source</a>
            <p className="detail">Developed during Kenzie Academy course.</p>
          </li>
          <li className="project-box">
            <p className="title">User CRUD</p>
            <p className="description">
              Simple User CRUD using bcrypt and JWT libraries. Topics Resources
            </p>
            <a href="https://github.com/danielecalixto/user-crud">source</a>
            <p className="detail">Developed during Kenzie Academy course.</p>
          </li>
          <li className="project-box">
            <p className="title">Products and Categories</p>
            <p className="description">
              Back End to manage products and its categories.
            </p>
            <a href="https://github.com/danielecalixto/products-categories">
              source
            </a>
            <p className="detail">Developed during Kenzie Academy course.</p>
          </li>
        </ul>
        <h3>Front End</h3>
        <ul>
          <li className="project-box">
            <p className="title">KenzieVan</p>
            <p className="description">
              Application to manage communication between parents and school bus
              drivers.
            </p>
            <a href="https://equipe-1-projeto-kenzievan.vercel.app">deploy</a>
            <a href="https://github.com/cah-suzuki/equipe-1-projeto-kenzievan">
              source
            </a>
            <p className="detail">
              Developed in group during Kenzie Academy course.
            </p>
          </li>
          <li className="project-box">
            <p className="title">Connect Four</p>

            <p className="description">Responsive game with Star Wars theme.</p>
            <a href="https://kenzie-academy-brasil-developers.github.io/entrega-lig-4-sprint-5-danielecalixto/">
              deploy
            </a>
            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/entrega-lig-4-sprint-5-danielecalixto">
              source
            </a>
            <p className="detail">
              Developed in group during Kenzie Academy course.
            </p>
          </li>
          <li className="project-box">
            <p className="title">Love Maze</p>

            <p className="description">Simple maze for desktop.</p>
            <a href="https://kenzie-academy-brasil-developers.github.io/entrega-labirinto-sprint-5-danielecalixto/">
              deploy
            </a>
            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/entrega-labirinto-sprint-5-danielecalixto">
              source
            </a>
            <p className="detail">Developed during Kenzie Academy course.</p>
          </li>
          <li className="project-box">
            <p className="title">Rock, Paper and Scissors</p>

            <p className="description">Responsive game with Mickey theme.</p>
            <a href="https://kenzie-academy-brasil-developers.github.io/entrega-construa-um-jogo-de-azar-sprint-3-danielecalixto/">
              deploy
            </a>
            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/entrega-construa-um-jogo-de-azar-sprint-3-danielecalixto">
              source
            </a>
            <p className="detail">Developed during Kenzie Academy course.</p>
          </li>
          <li className="project-box">
            <p className="title">Landing Page</p>
            <p className="description">
              Responsive landing page for a Streaming Platform.
            </p>
            <a href="https://kenzie-academy-brasil-developers.github.io/estilizar-layout-plataforma-streaming-sprint-2-danielecalixto/">
              deploy
            </a>
            <a href="https://github.com/Kenzie-Academy-Brasil-Developers/estilizar-layout-plataforma-streaming-sprint-2-danielecalixto">
              source
            </a>
            <p className="detail">Developed during Kenzie Academy course.</p>
          </li>
        </ul>
      </Container>
      <BackToHome></BackToHome>
      <Footer></Footer>
    </div>
  )
}

export default Projects
