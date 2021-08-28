import React from 'react'

import Intro from "../intro/Intro";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact"

function Home() {
    return (
        <div className= "Home">
            <Intro/>
            <About/>
            <Portfolio/>
            <Contact/>            
        </div>
    )
}

export default Home;
