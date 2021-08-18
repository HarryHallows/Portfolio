import "./topbar.scss"


//Routing
import { Link } from "react-router-dom";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}  id="topbar" alt="The navigation bar">
            <div className="wrapper" id="wrapper" alt="A div to contain the different positions of the right and left elements">
                <div className= "left" alt="The left hand side of the navigation bar">
                    <Link to="/" className ="logo">Harry Hallows</Link>
                </div>

                <div className="right" alt="The right hand side of the navigation bar">          
                    
                    <div className="menuButton" onClick={()=>(setMenuOpen(!menuOpen))} alt="The hamburger menu button" >  
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
           
            </div>
           
        </div>
    )
}
