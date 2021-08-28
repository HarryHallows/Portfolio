//File Imports
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

//Portfolio Pages
import PortfolioPages from "./components/portfolio/pages/PortfolioPages"

import "./app.scss";

//Functionality
import { useState } from "react";
import Menu from "./components/menu/Menu";

//Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() 
{
  //Hook to control the usage of the hamburger menu button
  const [menuOpen, setMenuOpen] = useState(false)

  //TODO: Move main page components into a separate Home component
  //Hook up the SCSS to the new directory of this component

  return (   
    <Router>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <div className="sections">
          <Intro />
          <About />           
          <Portfolio />
          <Contact /> 
        </div>

        <div className="appPortfolio">
          <Switch>
            <Route exact path="/" component={PortfolioPages}/>
          </Switch>
        </div>
        {/*<Route exact path ="/" component={PortfolioPages}/>/*}
        {/* <Route exact path="/" component={Home}/>*/}
        {/*<Route exact to="/" component={Intro}/>*/}
      </div>
    </Router>
  );
}

export default App;
