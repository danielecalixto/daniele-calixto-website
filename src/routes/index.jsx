import { Switch, Route } from "react-router-dom"

import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Projects from "../pages/Projects"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </Switch>
  )
}

export default Routes
