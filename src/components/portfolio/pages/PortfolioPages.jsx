import React from 'react'

//Portfolio Pages
import Fortify from "./fortify/Fortify"
import Cloud from "./cloud/Cloud"
import Gonemissing from './gonemissing/Gonemissing';
import ArchiesHunt from "./archieshunt/Archieshunt";
import Bystander from './bystander/Bystander';
import Penelope from './penelope/Penelope';

import "./portfolioPages.scss"


//Routing
import {  Route, Switch } from "react-router-dom";

function PortfolioPages() {
    return (
        <Switch>
            <div className="portfolioPages">
                <Route path="/fortify" component={Fortify}/>
                <Route path="/cloud" component={Cloud}/>
                <Route path="/gonemissing" component={Gonemissing}/>
                <Route path="/bystander" component={Bystander}/>
                <Route path="/archieshunt" component={ArchiesHunt}/>
                <Route path="/penelope" component={Penelope}/>
            </div>
        </Switch>
    )
}

export default PortfolioPages;