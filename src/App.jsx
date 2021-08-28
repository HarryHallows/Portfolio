//File Imports
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";

//Portfolio Pages
import Fortify from "./components/portfolio/pages/fortify/Fortify"
import Cloud from "./components/portfolio/pages/cloud/Cloud"
import Gonemissing from './components/portfolio/pages/gonemissing/Gonemissing';
import ArchiesHunt from "./components/portfolio/pages/archieshunt/Archieshunt";
import Bystander from './components/portfolio/pages/bystander/Bystander';
import Penelope from './components/portfolio/pages/penelope/Penelope';

import "./app.scss";

//Functionality
import { useState } from "react";


//Routing
import { Route, Switch } from "react-router-dom";

function App() 
{
  //Hook to control the usage of the hamburger menu button
  const [menuOpen, setMenuOpen] = useState(false)

  //TODO: Move main page components into a separate Home component
  //Hook up the SCSS to the new directory of this component

  return (   
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <Switch>
          <div className="sections">
            <Route exact path="/" component={Home}/>
          </div>
          
          <Route path="/Fortify" component={Fortify}/>
          <Route path="/CloudCities" component={Cloud}/>
          <Route path="/GoneMissing" component={Gonemissing}/>
          <Route path="/ArchiesHunt" component={ArchiesHunt}/>
          <Route path="/Bystander" component={Bystander}/>
          <Route path="/Penelope" component={Penelope}/>
        </Switch>
      </div>

  );
}

export default App;
